(function () {

    angular.module('QuickSearch')
        .service('UsersService', UsersService);

    UsersService.$inject = ['$http'];

    function UsersService ($http) {
        
        this.getUserList = function () {
            return $http.get('../data/user-list.json');
        }

    }

})();