export class DataStore {
    worker;
    constructor() {
        this.worker = new Worker("data-store.js");
        this.worker.onmessage = this.onMessage.bind(this);
    }

    postMessage(message, parameters) {
        this.worker.postMessage([message, parameters]);
    }

    onMessage(e) {
        const event = new CustomEvent("onmessage", {detail: e.data});
        dispatchEvent(event);
    }
}