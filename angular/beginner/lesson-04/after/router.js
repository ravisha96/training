(function () {

    angular.module('Routing', ['ui.router'])
        .config(Router);

        Router.$inject = ['$stateProvider', '$urlRouterProvider'];

        function Router ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    controller: 'HomeController',
                    template: '<div>{{ title }}</div>'
                });

            $urlRouterProvider.otherwise('/home');
        }

})();