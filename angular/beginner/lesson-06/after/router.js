(function () {

    angular.module('QuickSearch', ['ui.router'])
        .config(Router);

        Router.$inject = ['$stateProvider', '$urlRouterProvider'];

        function Router ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'HomeController',
                    templateUrl: 'home/home.tpl.html'
                })

                .state('about', {
                    url: '/about',
                    controller: 'AboutController',
                    templateUrl: 'about/about.tpl.html'
                })

                .state('contact', {
                    url: '/contact',
                    controller: 'ContactController',
                    templateUrl: 'contact/contact.tpl.html'
                })

            $urlRouterProvider.otherwise('/home');
        }

})();