export class AssetTemplates {
    getTemplate(model) {
        const element = document.createElement("div");
        element.classList.add("treeViewItem");
        element.innerHTML = `<div>${model.code}</div><div class="description leftOnceSpace">${model.description}</div>`;
        return element;
    }
}