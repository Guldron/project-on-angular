;
(function () {

    "use strict";

    angular
        .module('app')
        .directive('dropDown', dropDown);

    dropDown.$inject = ['constants'];

    function dropDown(constants) {

        var url = constants.templates.dropdown;
        console.log(url);


        function link($scope, $element, $attrs) {
            $scope.$on('dropDownData', function (event, data) {
                console.log(data);
                $scope.selectData = data.data.response.sources;
            });
        }

        return {
            restrict: 'EA',
            url: url,
            scope: {},
            controller: 'dropDownController',
            controllerAs: 'dropDown',
            link: link
        }
    }
})();