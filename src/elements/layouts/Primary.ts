import Component from "../_component.ts";

export default class PrimaryLayout extends Component {
    connectedCallback() {
        this.setTemplate(html => html`
            <header>
                <avatar-image></avatar-image>
                <nav>
                    <route-link to="/" title="Home"></route-link>
                    <route-link to="/about" title="About"></route-link>
                    <color-scheme-toggle></color-scheme-toggle>
                </nav>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <color-scheme-toggle></color-scheme-toggle>
            </footer>
        `);

        this.setStyle(css => css`
            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem;
                background-color: var(--neutral-100);
            }

            nav {
                display: flex;
                gap: 1rem;
            }

            main {
                padding: 1rem;
                min-height: 100vh;
            }

            footer {
                display: flex;
                justify-content: flex-end;
                padding: 1rem;
                background-color: var(--neutral-100);
            }
        `);
    }
}