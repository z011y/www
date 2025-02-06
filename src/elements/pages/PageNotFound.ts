import Component from "../_component.ts";

export default class PageNotFound extends Component {
    static observedAttributes = ["path", "title"];

    constructor() {
        super();
        this.render();
    }

    private render() {
        this.setTemplate(html => html`
            <h1>404 - Page Not Found</h1>
        `);
    }
}