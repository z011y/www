import Store from "./_store.ts";
import AsyncParsedMarkdownStore from "./asyncParsedMarkdownStore.ts";

export default class RouteStore extends Store<Map<string, Element>> {
    static instance: RouteStore;
    #asyncParsedMarkdownStore: AsyncParsedMarkdownStore | undefined;

    constructor() {
        super();
        if (RouteStore.instance) {
            return RouteStore.instance;
        }

        RouteStore.instance = this;
        this.#asyncParsedMarkdownStore = new AsyncParsedMarkdownStore();
        this.#init();
    }

    async #init() {
        const routes = new Map<string, Element>();
        document.querySelectorAll('[data-route]').forEach((element) => {
            routes.set(element.getAttribute('data-route')!, element);
        });
        await this.#getMarkdownRoutes();
        this.set(routes);
    }

    async #getMarkdownRoutes() {
        const markdownRoutes = new Map<string, Element>();
        await this.#asyncParsedMarkdownStore?.ready();
        const parsedMarkdown = this.#asyncParsedMarkdownStore?.get();
        parsedMarkdown?.forEach(content => {
            const path = content.fileName === 'index' ? '/' : `/${content.fileName}`;
            const pageView = document.createElement('page-view');
            pageView.setAttribute('path', path);
            pageView.setAttribute('content', content.html);
            markdownRoutes.set(path, pageView);
        });
    }
}