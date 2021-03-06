;
(function () {

    'use strict';

    angular
        .module('app')
        .directive('tabs', tabs);

    function tabs(constants) {

        var url = constants.templates.tabs;

        function link($scope, $element, $attrs, tabs) {

            $scope.tabs.tab = 0;

            $scope.tabs.links = $scope.tabs.tabsName.map(function(link) {
                return link.split(' ')[0];
            });

            $scope.tabs.linksName = function(index){
                return $scope.tabs.links[index]
            };

            $scope.tabs.selectedTab = function (setTab) {
                $scope.tabs.tab = setTab;
            };

            $scope.tabs.tabClass = function (selectedTab) {
                if (selectedTab === $scope.tabs.tab) {
                    return "active-header-tab"
                }
                else {
                    return "inactive-header-tab"
                }
            };
        }

        return {
            restrict: 'EA',
            templateUrl: url,
            link: link,
            controller: "tabsController",
            controllerAs: "tabs"
        }
    }
})();