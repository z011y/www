import Component from "./_component.ts";

export default class PageView extends Component {
    static observedAttributes = ["path", "title", "element"];

    connectedCallback() {
        const viewElementTagName = this.getAttribute('element');

        if (viewElementTagName) {
            const viewElement = document.createElement(viewElementTagName);
            this.shadow.innerHTML = '';
            this.shadow.appendChild(viewElement);
        }
    }
}