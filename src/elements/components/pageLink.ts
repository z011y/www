import Component from "../_component.ts";

export default class PageLink extends Component {
    static observedAttributes = ["to", "title"];
    #link: HTMLAnchorElement | null = null;

    connectedCallback() {
        this.#link = document.createElement("a");
        this.#link.href = this.getAttribute("to") ?? "";
        this.#link.textContent = this.getAttribute("title") ?? "";
        this.shadow.appendChild(this.#link);

        this.setStyle((css) => css`
            a {
                color: var(--primary-500);
                text-decoration: none;
            }
        `);

        this.#link.addEventListener("click", (event) => this.#handleClick(event));
    }

    disconnectedCallback() {
        this.#link?.removeEventListener("click", (event) => this.#handleClick(event));
    }

    attributeChangedCallback(name: string, _: string, newValue: string) {
        if (!this.#link) return;

        switch (name) {
            case "to":
                this.#link.href = newValue
                break;
            case "title":
                this.#link.textContent = newValue
                break;
            default:
                break;
        }
    }

    #handleClick(event: MouseEvent) {
        event.preventDefault();
        window.history.pushState({}, "", this.#link?.href);
        window.dispatchEvent(new PopStateEvent("popstate"));
    }
}