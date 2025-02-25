import Component from "../_Component.ts";
import AsyncRouteStore from "../../stores/asyncRouteStore.ts";

export default class PageSelect extends Component {
    readonly #asyncRouteStore = new AsyncRouteStore();

    connectedCallback() {
        const select = document.createElement('select');
        select.name = 'pages';
        select.id = 'page-select';

        this.#asyncRouteStore.ready().then(() => {
            const currentRoute = this.#asyncRouteStore.getByPath(window.location.pathname) ?? this.#asyncRouteStore.getByPath('*');
            if (!currentRoute) return;
            const currentRouteOption = document.createElement('option');
            currentRouteOption.value = currentRoute.path;
            currentRouteOption.textContent = currentRoute.name.toLowerCase();
            select.appendChild(currentRouteOption);

            this.#asyncRouteStore.all()?.forEach(route => {
                if (route.path === currentRoute.path || route.path === '*') return;
                const option = document.createElement('option');
                option.value = route.path;
                option.textContent = route.name.toLowerCase();
                select.appendChild(option);
            });
        });

        this.shadow.appendChild(select);

        this.setStyle(css => css`
            select {
                font-size: 1.2rem;
                font-family: 'NANHolo', monospace;
                color: var(--neutral-500);
                background-color: transparent;
                border: none;
            }
        `);

        select.addEventListener('change', () => {
            const path = select.value;
            window.history.pushState({}, "", path);
            window.dispatchEvent(new PopStateEvent("popstate"));
        });
    }
}