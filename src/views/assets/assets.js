import {DataStore} from "./../../data-store";
import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable, inject} from 'aurelia-framework';
import {AssetTemplates} from './asset-templates';

@inject(DataStore, EventAggregator)
export class Assets {
    @bindable templates;

    dataStore;
    eventAggregator;
    assetTreeRequestEvent;
    getRootEvent;

    constructor(dataStore, eventAggregator) {
        this.dataStore = dataStore;
        this.eventAggregator = eventAggregator;
        this.templates = new AssetTemplates();

        this.assetTreeRequestEvent = this.eventAggregator.subscribe("assetTree:get", this.assetTreeRequest.bind(this));
        this.getRootEvent = this.eventAggregator.subscribe("assetTree:getRoot", this.getRoot.bind(this));
    }

    attached() {
        addEventListener("onmessage", this.onMessage.bind(this));
        this.dataStore.postMessage("load", "data/assets.json");
    }

    detached() {
        this.assetTreeRequestEvent.dispose();
        this.getRootEvent.dispose();
        this.dataStore = null;
        this.eventAggregator = null;
    }

    onMessage(event) {
        const action = event.detail.action;
        const result = event.detail.result;
        const requesetId = event.detail.requesetId;

        if (action == "load") {
            this.dataState = result;
        }
        else if (action === "data:root") {
            this.loadAssets(result, requesetId);
        }
        else if (action === "data:children") {
            this.loadAssets(result, requesetId);
        }
    }

    getRoot() {
        const rootAsset = {
            id: 1,
            code: "ROOT",
            description: "Root Asset"
        };

        const data = [rootAsset];

        this.eventAggregator.publish("assetTree:getRootResponse", {
            parentId: -1,
            data: data
        });
    }

    assetTreeRequest(request) {
        this.parentId = request.parentId;

        if (this.parentId === -1) {
            this.dataStore.postMessage("data:root", null);
        }
        else {
            this.dataStore.postMessage("data:children", this.parentId)
        }
    }

    loadAssets(assets, requesetId) {
        this.eventAggregator.publish("assetTree:push", {
            parentId: requesetId,
            data: assets
        });
    }

}
