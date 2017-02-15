// http://localhost:8080/#/details?browse="true"
// http://localhost:8080/#/details?id=1001

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {isMobile} from './../../lib/utils';
import {DetailsDesktop} from './details-desktop';
import {DetailsMobile} from './details-mobile';

export const viewState = {
    hasDataItems: false,
    inBrowse: false
};

@inject(Element, Router)
export class Details {
    viewState = viewState;
    controller;

    constructor(element) {
        this.element = element;
        this.controller = isMobile() ? new DetailsMobile(this) : new DetailsDesktop(this);
    }

    activate(params) {
        this.processInitialView(params);
    }

    deactivate() {
        this.controller.dispose();
        this.controller = null;
    }

    processInitialView(params) {
        if (params.browse) {
            this.viewState.hasDataItems = true;
            this.viewState.inBrowse = true;
        }
        else if (params.id) {
            this.recordId = params.id;
            this.viewState.hasDataItems = false;
            this.viewState.inBrowse = false;
        }
    }

    backToBrowse() {
        this.viewState.inBrowse = true;
    }
}
