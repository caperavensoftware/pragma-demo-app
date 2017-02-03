import {menuItems, quickItems} from './menu-items';

import {customElement, useShadowDOM, inject} from 'aurelia-framework';
@customElement('menu')
@inject(Element)
export class Menu {
    element = null;
    menuItems = null;
    quickItems = null;

    constructor(element) {
        this.element = element;
        this.menuItems = menuItems.splice(0);
        this.quickItems = quickItems.splice(0);

        this.updateMenuItemQuickStatus();
    }

    updateMenuItemQuickStatus() {
        return new Promise(resolve => {
            for (let menuItem of this.menuItems) {
                const quickItem = this.quickItems.find((item) => {
                    return item.text === menuItem.text;
                });

                menuItem.inQuicklaunch = !!quickItem;
            }

            resolve();
        });
    }

    menuSelected(event) {
        alert(event);
    }
}
