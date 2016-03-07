;
(function () {

    "use strict";

    angular
        .module('app')
        .directive('maintain', maintain);

    function maintain() {


        function link($scope, $element, $attrs) {
        }

        return {
            restrict: 'EA',
            controller: 'maintainController',
            link: link
        }
    }
})();