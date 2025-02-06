export interface IStore<TState> {
    get: () => TState;
    set: (state: TState) => void;
}

export abstract class Observable {
    #observers = new Set<() => void>();

    subscribe(callback: () => void) {
        this.#observers.add(callback);
    }

    unsubscribe(callback: () => void) {
        this.#observers.delete(callback);
    }

    notify() {
        this.#observers.forEach(callback => callback());
    }
}