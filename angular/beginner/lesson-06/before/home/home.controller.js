(function () {

    angular.module('QuickSearch')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController ($scope) {
        $scope.title = 'Home page';
    }

})();