import * as esbuild from "esbuild";
import esbuildPluginCopy from "esbuild-plugin-copy";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ctx = await esbuild.context({
    entryPoints: ["src/entry.ts"],
    outfile: "www/bundle.js",
    logLevel: "info",
    bundle: true,
    sourcemap: true,
    minify: process.argv.includes("--minify"),
    loader: {".css": "css", ".otf": "file", ".ttf": "file", ".png": "file"},
    banner: {
        js: process.argv.includes("--reload")
            ? `new EventSource('/esbuild').addEventListener('change', () => location.reload());`
            : "",
    },
    plugins: [esbuildPluginCopy({
        assets: [
            {
                from: "src/index.html",
                to: "index.html",
                watch: true
            },
            {
                from: "assets/images/*",
                to: "images",
                watch: true
            }
        ]
    })],
});

if (process.argv.includes("--watch")) {
    await ctx.watch();
}

if (process.argv.includes("--serve")) {
    const {host, port} = await ctx.serve({
        servedir: "www",
    });

    http.createServer((req, res) => {
        const options = {
            hostname: host,
            port: port,
            path: req.url,
            method: req.method,
            headers: req.headers,
        }

        // Forward each incoming request to esbuild
        const proxyReq = http.request(options, proxyRes => {
            // If esbuild returns "not found", send the actual index.html file
            if (proxyRes.statusCode === 404) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                const indexPath = path.join(path.dirname(new URL(import.meta.url).pathname), 'www', 'index.html');
                fs.createReadStream(indexPath).pipe(res);
                return;
            }

            // Otherwise, forward the response from esbuild to the client
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res, {end: true});
        });

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, {end: true});
    }).listen(3000)
}
