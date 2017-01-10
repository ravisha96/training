(function () {

    angular.module('QuickSearch')
        .filter('capitalize', CapitalizeFilter);

    function CapitalizeFilter () {

        return function (input) {


            if(input) {
                input = input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
            } else {
                input = '';
            }

            return input;
        }

    }

})();