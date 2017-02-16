export class DetailsMobile {
    viewModel;

    get isDetailsListVisible() {
        return this._isDetailsListVisible;
    }

    set isDetailsListVisible(value) {
        this._isDetailsListVisible = value;

        if (this.viewModel.listElement) {
            this.viewModel.listElement.style.transition = "transform 0.5s ease-out";
            this.viewModel.listElement.style.transform = this.detailListTranslates[+ value];
        }
    }

    get isActionsVisible() {
        return this._isActionsVisible;
    }

    set isActionsVisible(value) {
        this._isActionsVisible = value;

        this.viewModel.actionsElement.style.transition = "transform 0.5s ease-out";
        this.viewModel.actionsElement.style.transform = this.detailActionsTranslates[+ value];
    }

    constructor(viewModel) {
        this.viewModel = viewModel;

        this.detailActionsTranslates = [
            `translate(${screen.width}px, 0)`,
            `translate(0, 0)`
        ];

        this.detailListTranslates = [
            "translate(-100%, 0)",
            "translate(0, 0)"
        ];

        this.initializeDetailsListElement();
        this.initializeActionsElement();
    }

    dispose() {
        this.viewModel = null;
    }

    initializeDetailsListElement() {
        if (this.viewModel.listElement) {
            this.viewModel.listElement.style.position = "absolute";
            this.viewModel.listElement.style.willChange = "transform";
        }

        this.isDetailsListVisible = false;
    }

    initializeActionsElement() {
        this.viewModel.actionsElement.style.position = "absolute";
        this.viewModel.actionsElement.style.willChange = "transform";

        this.isActionsVisible = false;
    }
}