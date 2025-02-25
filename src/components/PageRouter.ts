import Component from "./_Component.ts";
import AsyncRouteStore from "../stores/asyncRouteStore.ts";

export default class PageRouter extends Component {
    #asyncRouteStore = new AsyncRouteStore();

    connectedCallback() {
        this.setTemplate(html => html`
            <slot></slot>
        `);

        this.#asyncRouteStore.ready().then(() => {
            this.handleRoute();
            window.addEventListener('popstate', () => this.handleRoute());
        });
    }

    disconnectedCallback() {
        window.removeEventListener('popstate', () => this.handleRoute());
    }

    handleRoute() {
        const path = window.location.pathname;
        const route = this.#asyncRouteStore.getByPath(path) ?? this.#asyncRouteStore.getByPath('*');

        if (!route) {
            throw new Error(`No route found for path: ${path}, and no default route (*) found`);
        }

        this.shadow.innerHTML = '';
        this.shadow.appendChild(route.element);
    }
}