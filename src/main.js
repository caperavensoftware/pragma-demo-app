export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources(
                'pragma-menu/pragma-menu',
                'pragma-treeview/pragma-treeview'
            );

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}