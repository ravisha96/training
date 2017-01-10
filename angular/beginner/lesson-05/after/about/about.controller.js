(function () {

    angular.module('Routing')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    function AboutController ($scope) {
        $scope.title = 'About page';
    }

})();