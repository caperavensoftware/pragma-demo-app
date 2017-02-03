import {menuItems, quickItems} from './menu-items';
import {bindable, customElement, useShadowDOM, inject} from 'aurelia-framework';

@customElement('menu')
@inject(Element)
export class Menu {
    element = null;

    @bindable menuItems = null;
    @bindable quickItems = null;
    @bindable searchText = null;
    @bindable quickFilter = false;

    constructor(element) {
        this.element = element;
        this.menuItems = menuItems.slice(0);
        this.menuItemsBackup = menuItems.slice(0);
        this.quickItems = quickItems.slice(0);

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

            for (let quickItem of this.quickItems) {
                quickItem.inQuicklaunch = true;
            }

            resolve();
        });
    }

    menuSelected(event) {
        const id = event.target.dataset.id;
        console.log(id);
    }

    searchTextChanged() {
        if (this.searchText.length == 0) {
            return this.quickFilterChanged()
        }

        let result;

        if (this.quickFilter) {
            result = this.quickItems.filter((item) => {
                return item.text.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
            });
        }
        else
        {
            result = this.menuItemsBackup.filter((item) => {
                return item.text.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
            });
        }

        this.menuItems = result;
    }

    quickFilterChanged() {
        if (this.quickFilter) {
            this.menuItems = this.quickItems.slice(0);
        }
        else {
            this.menuItems = this.menuItemsBackup.slice(0);
        }
    }
}
