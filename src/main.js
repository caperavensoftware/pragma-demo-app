export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources(
                'pragma-menu/pragma-menu'
            );

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}