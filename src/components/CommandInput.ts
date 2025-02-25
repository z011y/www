import Component from "../_Component.ts";

export default class CommandInput extends Component {
    connectedCallback() {
        this.setTemplate(html => html`
            <div class="input-container">
                <input type="search" placeholder="Ask me anything...">
                <span class="icon">/</span>
            </div>
        `);

        this.setStyle(css => css`
            .input-container {
                position: relative;
                width: 100%;
            }

            input {
                width: 100%;
                padding: 0.8rem 3.6rem 0.8rem 1.6rem;
                border: 1px solid var(--neutral-50);
                border-radius: 2.4rem;
                font-size: 1.2rem;
                font-family: 'Fira Code', monospace;
                color: var(--neutral-500);
                background-color: var(--neutral-0);
            }

            .icon {
                position: absolute;
                right: 1.2rem;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1.2rem;
                font-family: 'Fira Code', monospace;
                color: var(--neutral-500);
                pointer-events: none; /* Ensure the icon does not block input interaction */
                background-color: var(--neutral-100);
                border-radius: 0.4rem;
                padding: 0 0.6rem;
            }
        `);
    }
}