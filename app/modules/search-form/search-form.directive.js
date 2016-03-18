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
            $scope.detailType = "ALPHANUMERIC";
            $scope.regExpNumeric = /^[0-9]*$/;
            $scope.regExpAlphaNumeric = /^[a-zA-Z0-9]*$/;
            $scope.selectTab = 0;
            $scope.selectedTab = selectedTab;
            $scope.tabShow = tabShow;

            function selectedTab(setTab) {
                $scope.selectTab = setTab;
            };

            function tabShow(index) {
                if ($scope.selectTab === index) {
                    return true;
                } else {
                    return false;
                }
            };

            
            /*$scope.tabClass = function (selectedTab) {
                if (selectedTab === $scope.selectTab) {
                    return "active-search-tab"
                }
                else {
                    return "inactive-search-tab"
                }
            };*/
        }



        return {
            restrict: 'EA',
            link: link,
            templateUrl: url,
            controller: "searchFormController",
            scope:{
                searchFormData:"=searchformdata"
            }
        }
    }
})();
