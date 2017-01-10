(function () {

    angular.module('Routing')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController ($scope) {
        $scope.title = 'Home page';
    }

})();