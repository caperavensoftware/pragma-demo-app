
// @flow
import {customElement, useShadowDOM, inject} from 'aurelia-framework';
@customElement('menu')
@inject(Element)
export class Menu {
    element = null;
    
    constructor(element) {
        this.element = element;
    }
}
