export class App {
    router = null;

    configureRouter(config, router) {
        config.title = 'Pragma Products';
        config.map([
            {route: ['', 'welcome'], name: 'welcome',      moduleId: 'views/welcome/welcome',      nav: true, title: 'Welcome'},
        ]);

        this.router = router;
    }

    attached() {
        const menuBurgerButton = document.getElementById("menu-burger-button");

        menuBurgerButton.style.marginTop = "-0.3rem";
    }
}