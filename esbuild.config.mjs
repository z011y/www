import * as esbuild from "esbuild";
import esbuildPluginCopy from "esbuild-plugin-copy";

async function build() {
  const ctx = await esbuild.context({
    entryPoints: ["src/main.ts"],
    outfile: "www/main.js",
    logLevel: "info",
    bundle: true,
    sourcemap: true,
    minify: process.argv.includes("--minify"),
    loader: { ".css": "css", ".otf": "file", ".png": "file" },
    banner: {
      js: process.argv.includes("--reload")
        ? `new EventSource('/esbuild').addEventListener('change', () => location.reload());`
        : "",
    },
    plugins: [esbuildPluginCopy({ assets: ["src/index.html"] })],
  });

  if (process.argv.includes("--watch")) {
    await ctx.watch();
  }

  if (process.argv.includes("--serve")) {
    const { host, port } = await ctx.serve({
      servedir: "www",
    });
  }
}

await build();
