export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources(
                'pragma-menu/pragma-menu',
                'pragma-treeview/pragma-treeview',
                'pragma-tabsheet/pragma-tabsheet',
                'pragma-screengen/attributes/filterable',
                'pragma-screengen/attributes/selectable'
            );

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}