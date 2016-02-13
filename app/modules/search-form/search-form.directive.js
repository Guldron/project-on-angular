;
(function () {

    "use strict";

    angular
        .module('app')
        .directive('searchForm', searchForm);

    searchForm.$inject = ['constants'];

    function searchForm(constants) {

        var url = constants.templates.searchForm;

        function link($scope, $element, $attrs) {
            $scope.form.selectTab = 1;

            $scope.form.selectedTab = function (setTab) {
                console.log(setTab);
                $scope.form.selectTab = setTab;
            };

            $scope.form.tabClass = function (selectedTab) {
                if (selectedTab === $scope.form.selectTab) {
                    return "active"
                }
                else {
                    return "inactive"
                }
            };

            $scope.form.isSelect = function () {
            }
        }

        return {
            restrict: 'EA',
            templateUrl: url,
            scope:{
                searchFormData: "="
            },
            controller: 'searchFormController',
            controllerAs: 'form',
            link: link
        }
    }
})();
