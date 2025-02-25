import Component from "../_Component.ts";

export default class IconFactory extends Component {
    static observedAttributes = ["icon", "size", "color"];
    #icon: string;
    #size: string;
    #color: string;

    constructor() {
        super();
        this.#icon = this.getAttribute("icon") ?? "";
        this.#size = this.getAttribute("size") ?? "16";
        this.#color = this.getAttribute("color") ?? "currentColor";
    }

    attributeChangedCallback(name: string, _: string, newValue: string) {
        switch (name) {
            case "icon":
                this.#icon = newValue;
                break;
            case "size":
                this.#size = newValue;
                break;
            case "color":
                this.#color = newValue;
                break;

            default:
                break;
        }

        this.#create();
    }

    #create() {
        switch (this.#icon) {
            case "sun":
                this.#sunIcon();
                break;
            case "moon":
                this.#moonIcon();
                break;
            default:
                break;
        }
    }

    #sunIcon() {
        this.setTemplate(html => html`
            <svg width="${this.#size}" height="${this.#size}"
                 viewBox="0 0 ${this.#size} ${this.#size}" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="${this.#color}" fill-opacity="0.15"/>
                <path d="M7.25 3V0H8.75V3H7.25Z" fill="${this.#color}"/>
                <path d="M8.75 13V16H7.25V13H8.75Z" fill="${this.#color}"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="${this.#color}"/>
                <path d="M2.87347 1.81281L1.81281 2.87347L3.93413 4.99479L4.99479 3.93413L2.87347 1.81281Z"
                      fill="${this.#color}"/>
                <path d="M13.1265 14.1872L14.1872 13.1265L12.0659 11.0052L11.0052 12.0659L13.1265 14.1872Z"
                      fill="${this.#color}"/>
                <path d="M3 8.75H0V7.25H3V8.75Z" fill="${this.#color}"/>
                <path d="M13 7.25H16V8.75H13V7.25Z" fill="${this.#color}"/>
                <path d="M1.81281 13.1265L2.87347 14.1872L4.99479 12.0659L3.93413 11.0052L1.81281 13.1265Z"
                      fill="${this.#color}"/>
                <path d="M13.1265 1.81282L11.0052 3.93414L12.0659 4.9948L14.1872 2.87348L13.1265 1.81282Z"
                      fill="${this.#color}"/>
            </svg>
        `);
    }

    #moonIcon() {
        this.setTemplate(html => html`
            <svg width="${this.#size}" height="${this.#size}"
                 viewBox="0 0 ${this.#size} ${this.#size}" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.5 7.99998C1.5 6.10685 2.30938 4.40111 3.60334 3.21216C3.53532 3.6318 3.5 4.06202 3.5 4.49998C3.5 8.91826 7.08172 12.5 11.5 12.5C11.938 12.5 12.3682 12.4647 12.7878 12.3966C11.5989 13.6906 9.89313 14.5 8 14.5C4.41015 14.5 1.5 11.5898 1.5 7.99998Z"
                      fill="${this.#color}" fill-opacity="0.15"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M5 4.50002C5 3.47946 5.2352 2.51383 5.65436 1.65438L4.70701 0.707031C1.93132 1.9623 0 4.75562 0 8.00002C0 12.4183 3.58172 16 8 16C11.2444 16 14.0377 14.0687 15.293 11.293L14.3456 10.3457C13.4862 10.7648 12.5206 11 11.5 11C7.91015 11 5 8.08987 5 4.50002ZM1.5 8.00002C1.5 6.1069 2.30938 4.40116 3.60334 3.2122C3.53532 3.63184 3.5 4.06206 3.5 4.50002C3.5 8.9183 7.08172 12.5 11.5 12.5C11.938 12.5 12.3682 12.4647 12.7878 12.3967C11.5989 13.6906 9.89313 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8.00002Z"
                      fill="${this.#color}"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.5 0.93937L7.93934 4.50003L11.5 8.06069L15.0607 4.50003L11.5 0.93937ZM11.5 5.93937L10.0607 4.50003L11.5 3.06069L12.9393 4.50003L11.5 5.93937Z"
                      fill="${this.#color}"/>
            </svg>

        `);
    }
}