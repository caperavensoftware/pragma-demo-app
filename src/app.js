export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Pragma Products';
        config.map([
            {route: ['', 'welcome'], name: 'welcome', moduleId: 'views/welcome/welcome',      nav: true, title: 'Welcome'},
            {route: ['assets'], name: 'assets', moduleId: 'views/assets/assets', nav: true, title: 'Assets'},
            {route: ['planning'], name: 'planning', moduleId: 'views/planning-and-scheduling/planning-and-scheduling', nav: true, title: 'Planning and Scheduling'},
            {route: ['workorders'], name: 'workorders', moduleId: 'views/work-orders/work-orders', nav: true, title: 'Work Orders'},
        ]);

        this.router = router;
    }
}