export class DetailsDesktop {
    viewModel;
    gridDoubleClickHandler;

    constructor(viewModel) {
        this.viewModel = viewModel;
        this.gridDoubleClickHandler = this.gridDoubleClick.bind(this);

        this.viewModel.detailsElement.addEventListener("click", this.gridDoubleClickHandler);
    }

    dispose() {
        this.viewModel.detailsElement.removeEventListener("click", this.gridDoubleClickHandler);
        this.viewModel = null;
    }

    gridDoubleClick() {
        this.viewModel.viewState.inBrowse = false;
    }
}