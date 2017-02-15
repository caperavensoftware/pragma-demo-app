export class DetailsMobile {
    viewModel;

    constructor(viewModel) {
        this.viewModel = viewModel;
    }

    dispose() {
        this.viewModel = null;
    }
}