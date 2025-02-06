import Component from "./_component.ts";

export default class PageRouter extends Component {
    #routes = new Map<string, Element>();

    connectedCallback() {
        this.setTemplate(html => html`
            <slot></slot>
        `);

        this.setupRoutes();
        this.handleRoute();
        window.addEventListener('popstate', () => this.handleRoute());
    }

    disconnectedCallback() {
        window.removeEventListener('popstate', () => this.handleRoute());
    }

    setupRoutes() {
        const slot = this.shadow.querySelector('slot');
        slot?.assignedElements().forEach(element => {
            if (element.tagName !== 'PAGE-VIEW') {
                return;
            }

            const path = element.getAttribute('path');

            if (!path) {
                throw new Error('No path attribute found on page-view element');
            }

            this.#routes.set(path, element);
        });
    }

    handleRoute() {
        const path = window.location.pathname;
        const routeElement = this.#routes.get(path) ?? this.#routes.get('*');

        if (!routeElement) {
            throw new Error(`No route found for path: ${path}, and no default route (*) found`);
        }

        this.shadow.innerHTML = '';
        this.shadow.appendChild(routeElement);
    }
}