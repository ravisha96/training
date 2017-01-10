(function () {

    angular.module('Routing')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope'];

    function ContactController ($scope) {
        $scope.title = 'Contact page';
    }

})();