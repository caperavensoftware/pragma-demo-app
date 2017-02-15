export class DetailsDesktop {
    viewModel;
    gridDoubleClickHandler;

    constructor(viewModel) {
        this.viewModel = viewModel;
        this.gridDoubleClickHandler = this.gridDoubleClick.bind(this);

        this.viewModel.element.addEventListener("click", this.gridDoubleClickHandler);
    }

    dispose() {
        this.viewModel.element.removeEventListener("click", this.gridDoubleClickHandler);
        this.viewModel = null;
    }

    gridDoubleClick() {
        console.log("grid click");
        this.viewModel.viewState.inBrowse = false;
    }
}