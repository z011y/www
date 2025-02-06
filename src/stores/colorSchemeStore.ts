import {IStore, Observable} from "./_store.ts";

type ColorScheme = "light" | "dark";

export default class ColorSchemeStore extends Observable implements IStore<ColorScheme> {
    static instance: ColorSchemeStore;
    #colorScheme: ColorScheme = 'light';

    constructor() {
        super();
        if (ColorSchemeStore.instance) {
            return ColorSchemeStore.instance;
        }

        ColorSchemeStore.instance = this;
        this.#init();
    }

    #init() {
        const cachedColorScheme = localStorage.getItem("color-scheme") as ColorScheme | null;
        const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        this.set(cachedColorScheme ?? systemColorScheme);
    }

    get() {
        return this.#colorScheme;
    }

    set(colorScheme: ColorScheme) {
        this.#colorScheme = colorScheme;
        document.documentElement.setAttribute('data-color-scheme', colorScheme);
        localStorage.setItem("color-scheme", colorScheme);
        this.notify();
    }

    toggle() {
        this.set(this.#colorScheme === 'light' ? 'dark' : 'light');
    }
}