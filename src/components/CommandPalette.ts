import Component from "../_Component.ts";

export default class CommandPalette extends Component {
    #isActivated = false;

    connectedCallback() {
        this.#render();
        document.addEventListener('keydown', (e) => this.#handleKeydown(e));
    }

    disconnectedCallback() {
        document.removeEventListener('keydown', (e) => this.#handleKeydown(e));
    }

    #handleKeydown(event: KeyboardEvent) {
        if (event.key === '/') {
            event.preventDefault();
            this.#isActivated = !this.#isActivated;
            this.shadow.querySelector('.fixed-container')?.classList.toggle('active');
        }
    }

    #render() {
        this.setTemplate(html => html`
            <div class="fixed-container ${this.#isActivated ? 'active' : ''}">
                <avatar-image></avatar-image>
                <command-input></command-input>
            </div>
        `)

        this.setStyle(css => css`
            .fixed-container {
                position: fixed;
                left: 50%;
                bottom: 0;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                width: fit-content;
                padding: 0.5rem 1rem;
                gap: 0.5rem;
                background-color: var(--neutral-100);
                border-radius: 4.8rem;
                border: 1px solid var(--neutral-200);
                transition: 0.25s;
            }

            .active {
                bottom: 50%;
            }
        `)
    }
}