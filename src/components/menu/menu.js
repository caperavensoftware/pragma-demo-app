import {menuItems, quickItems} from './menu-items';
import {bindable, customElement, useShadowDOM, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@customElement('menu')
@inject(Element, Router)
export class Menu {
    element = null;

    @bindable menuItems = null;
    @bindable quickItems = null;
    @bindable searchText = null;
    @bindable quickFilter = false;

    constructor(element, router) {
        this.element = element;
        this.router = router;
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
        const plan = event.target.dataset.plan || "";
        this.router.navigateToRoute(plan);
        this.pragmaMenu.au["pragma-menu"].viewModel.isOpen = false;
    }

    searchTextChanged() {
        if (this.searchText.length == 0) {
            return this.quickFilterChanged()
        }

        this.filter();
    }

    filter() {
        let result;

        this.searchText = this.searchText || "";

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

        this.filter();
    }
}
