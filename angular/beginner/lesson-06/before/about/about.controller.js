(function () {

    angular.module('QuickSearch')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    function AboutController ($scope) {
        $scope.title = 'About page';
    }

})();