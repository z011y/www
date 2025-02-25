import Component from "./_Component.ts";

export default class PageLayout extends Component {
    async connectedCallback() {
        this.setTemplate(html => html`
            <header>
                <div class="container neutral-500">
                    <p>z011y</p>
                    <p class="margin-offset neutral-300">/</p>
                    <page-selector></page-selector>
                </div>
                <div class="container neutral-500">
                    <p>v4</p>
                    <color-scheme-toggle></color-scheme-toggle>
                </div>
            </header>
            <main>
                <slot></slot>
            </main>
            <command-palette></command-palette>
            <footer>
                <color-scheme-toggle></color-scheme-toggle>
            </footer>
        `);

        this.setStyle(css => css`
            *, *::before, *::after {
                box-sizing: border-box;
            }

            header {
                width: 100%;
                height: 6.4rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 2.4rem;
            }

            main {
                min-height: 100vh;
                display: flex;
                justify-content: center;
            }

            footer {
                height: 33vh;
                display: flex;
                justify-content: flex-end;
                padding: 1rem;
                margin-top: 2.4rem;
                background-color: var(--neutral-100);
            }

            .container {
                display: flex;
                align-items: center;
                gap: 1rem;
                font-size: 1.2rem;
            }

            .neutral-500 {
                color: var(--neutral-500);
            }

            .neutral-300 {
                color: var(--neutral-300);
            }

            .margin-offset {
                margin-right: -0.4rem;
            }
        `);
    }
}