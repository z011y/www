import Component from "./_Component.ts";

export default class PageView extends Component {
    static observedAttributes = ["path", "name", "element", "content"];

    connectedCallback() {
        const viewElementTagName = this.getAttribute('element');
        const viewContent = this.getAttribute('content');

        this.shadow.innerHTML = '';
        const page = document.createElement('div');
        page.className = 'page-view';
        this.shadow.appendChild(page);

        if (viewElementTagName) {
            const viewElement = document.createElement(viewElementTagName);
            page.appendChild(viewElement);
        }

        if (viewContent) {
            page.innerHTML = viewContent;
        }

        this.setStyle(css => css`
            .page-view {
                max-width: 60rem;
                margin: 0 2.4rem;
            }

            h1 {
                font-family: 'Jacquard12-Regular', serif;
                font-size: 12.8rem;
                font-weight: 400;
                color: var(--neutral-900);
                margin-block-start: 0;
                margin-block-end: 0;
            }

            h2 {
                font-size: 3.6rem;
                font-weight: 900;
            }

            h3 {
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                font-size: 1.6rem;
                font-weight: 400;
            }

            h4 {
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                font-size: 1.6rem;
                font-weight: 400;
            }

            p {
                font-size: 1.4rem;
            }

            p:first-of-type::first-letter {
                initial-letter: 3;
                margin-right: 1rem;
                font-family: Jacquard12-Regular, serif;
            }

            ul {
                border-left: 1px solid var(--neutral-200);
            }

            a {
                color: var(--primary-500);
                text-decoration: none;
            }

            hr {
                border: none;
                border-top: 1px solid var(--neutral-200);
                margin: 2.4rem 0;
            }
        `);
    }
}