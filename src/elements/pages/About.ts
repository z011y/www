import Component from "../_component.ts";

export default class About extends Component {
    static observedAttributes = ["path", "title"];

    constructor() {
        super();
        this.render();
    }

    private render() {
        this.setTemplate(html => html`
            <h1>About Me</h1>
            <p>
                Software Engineer @ Awardco
            </p>
        `);
    }
}