importScripts('fetch.js');


var messages = {
    load: "load",
    count: "data-count",
    getAllData: "get-all-data",
    getRoot: "data:root",
    getChildren: "data:children",
    close: "close"
};

function DataStoreManager() {
    this.actionAfterLoad = null;
    this.data = null;
}

DataStoreManager.prototype.getAllData = function() {
    if (this.data) {
        postMessage({
            action: messages.getAllData,
            result: this.data
        });

        this.getDataCount();
    }
    else {
        this.actionAfterLoad = this.getAllData;
    }
};

DataStoreManager.prototype.getRootData = function() {
    if (this.data) {
        var result = this.data.filter(function(element) {
            return element.tree_level == 0;
        });

        postMessage({
            action: messages.getRoot,
            result: result
        })
    }
    else {
        this.actionAfterLoad = this.getRootData;
    }
};

DataStoreManager.prototype.getChildren = function(parentId) {
    if (this.data) {
        var result = this.data.filter(function(element) {
            return element.parent_asset_id == parentId;
        });

        postMessage({
            action: messages.getChildren,
            requesetId: parentId,
            result: result
        })
    }
    else {
        this.actionAfterLoad = this.getChildren;
        this.actionAfterLoadParameter = parentId;
    }
};

DataStoreManager.prototype.getDataCount = function() {
    var count = 0;

    if (this.data) {
        count = this.data.length;
    }

    postMessage({
        action: messages.count,
        result: count
    })
};

DataStoreManager.prototype.load = function(params) {
    var store = this;
    fetch(params)
        .then(function(response) {
            return response.text();
        })
        .then(function(data){
            store.data = JSON.parse(data).data;
            postMessage({
                action: messages.load,
                result: "done"
            });

            if (store.actionAfterLoad) {
                store.actionAfterLoad(store.actionAfterLoadParameter);
                store.actionAfterLoad = null;
            }
        })
        .catch(function(error) {
            console.error(error.message);
        });
};

function closeManager() {
    storeManager.actionAfterLoad = null;
    storeManager.data = null;
    storeManager = null;
    close();
};

var storeManager = new DataStoreManager();

onmessage = function(e) {
    var action = e.data[0];
    var parameters = e.data[1];

    if (action === messages.load) {
        storeManager.load(parameters);
    }
    else if (action === messages.count) {
        storeManager.getDataCount()
    }
    else if (action == messages.getAllData) {
        storeManager.getAllData()
    }
    else if (action === messages.getRoot) {
        storeManager.getRootData()
    }
    else if (action === messages.getChildren){
        storeManager.getChildren(parameters);
    }
    else if (action === messages.close) {
        closeManager();
    }
};