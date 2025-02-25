import Component from "../_Component.ts";

export default class Avatar extends Component {
    connectedCallback() {
        this.setTemplate(html => html`
            <img src="/images/avatar.png" alt="Logo">
        `);

        this.setStyle(css => css`
            img {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-color: var(--bg-color);
            }
        `);
    }
}