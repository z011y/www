import {IStore, Observable} from "./_store.ts";
import {marked} from "marked";

interface MarkdownManifest {
    files: string[];
    generatedAt: string;
}

interface MarkdownContent {
    fileName: string;
    content: string;
    html: string;
}

export default class MarkdownContentStore extends Observable implements IStore<MarkdownContent[]> {
    static instance: MarkdownContentStore;
    #markdownContent: MarkdownContent[] = [];
    #initialized: Promise<void>;

    constructor() {
        super();
        if (MarkdownContentStore.instance) {
            return MarkdownContentStore.instance;
        }

        MarkdownContentStore.instance = this;
        this.#initialized = this.#init();
    }

    async #init() {
        const manifestResponse = await fetch('/markdown-manifest.json');
        const manifest: MarkdownManifest = await manifestResponse.json();

        const markdownContent = await Promise.all(
            manifest.files.map(async (filePath) => {
                const response = await fetch(filePath);
                const content = await response.text();
                return {
                    fileName: filePath.split('/').pop()?.replace('.md', '') || '',
                    content: content,
                    html: await marked.parse(content)
                };
            })
        );

        this.set(markdownContent);
    }

    async ready() {
        await this.#initialized;
    }

    get() {
        return this.#markdownContent;
    }

    set(content: MarkdownContent[]) {
        this.#markdownContent = content;
        this.notify();
    }
}