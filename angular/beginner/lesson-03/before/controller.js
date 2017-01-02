(function () {

    var app = angular.module('Controllers', []);

    app.controller('ParentController', ParentController);
    app.controller('ChildController', ChildController);
    app.controller('SubChildController', SubChildController);

    
    ParentController.$inject = ['$scope']
    function ParentController ($scope) {
        $scope.name = 'Parent Controller';
    }

    
    ChildController.$inject = ['$scope']
    function ChildController ($scope) {
        $scope.name = 'Child Controller';
    }

    
    SubChildController.$inject = ['$scope']
    function SubChildController ($scope) {
        $scope.name = 'SubChild Controller';
    }

})();