// http://localhost:8080/#/details?browse="true"
// http://localhost:8080/#/details?id=1001

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {isMobile} from './../../lib/utils';
import {DetailsDesktop} from './details-desktop';
import {DetailsMobile} from './details-mobile';

export const viewState = {
    showDataItems: false,
    inBrowse: false
};

@inject(Router)
export class Details {
    viewState = viewState;
    controller;
    detailsElement;
    listElement;
    actionsElement;

    constructor() {
    }

    activate(params) {
        this.processInitialView(params);
    }

    deactivate() {
        this.controller.dispose();
        this.controller = null;
    }

    bind() {
        this.controller = isMobile() ? new DetailsMobile(this) : new DetailsDesktop(this);
    }

    processInitialView(params) {
        if (params.browse) {
            this.viewState.showDataItems = true;
            this.viewState.inBrowse = true;
        }
        else if (params.id) {
            this.recordId = params.id;
            this.viewState.showDataItems = false;
            this.viewState.inBrowse = false;
        }
    }

    backToBrowse() {
        this.viewState.inBrowse = true;
    }
}
