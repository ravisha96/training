(function () {

    var app = angular.module('Stopwatch', []);

    app.controller('StopWatchController', Stopwatch);

    Stopwatch.$inject = ['$scope'];
    
    function Stopwatch ($scope) {

        function updateClock () {
            $scope.watch = new Date();
        }

        /**
         * This piece of code will call updateClock method, in every 1000ms (1second) interval.
         */
        setInterval(function () {
            updateClock();
        }, 1000);

        // setInterval(function () {
        //     $scope.$apply(updateClock);
        // }, 1000);
        

        updateClock();
    }

})();