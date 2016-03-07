;
(function () {

    "use strict";

    angular
        .module('app')
        .directive('dropDown', dropDown);

    dropDown.$inject = ['constants'];

    function dropDown(constants) {

        var url = constants.templates.dropDown;

        function link($scope, $element, $attrs) {

        }

        return {
            restrict: 'EA',
            templateUrl: url,
            scope:{
                dropDownData: "=dropdowndata"
            },
            controller: 'dropDownController',
            link: link
        }
    }
})();