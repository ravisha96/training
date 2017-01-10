(function () {

    angular.module('QuickSearch')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'UsersService'];

    function HomeController ($scope, usersService) {

        $scope.users = [];

        usersService
            .getUserList()
            .then(function (users) {
                $scope.users = users.data;
            });
    }

})();