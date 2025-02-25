import Component from "../_Component.ts";

export default class PageNotFound extends Component {
    static observedAttributes = ["path", "title"];

    constructor() {
        super();
        this.render();
    }

    connectedCallback() {
        this.setStyle(css => css`
            h1 {
                font-size: 25.6rem;
                font-weight: 400;
                font-family: 'Jacquard12-Regular', serif;
            }
        `);
    }

    private render() {
        this.setTemplate(html => html`
            <h1>404</h1>
            <a href="/">Go Home</a>
        `);
    }
}