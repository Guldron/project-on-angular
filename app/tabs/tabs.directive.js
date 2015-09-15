(function(){

  'use strict';

  function tabs(constants){

    function link($scope, $element, $attrs){
      $scope.tab = 1;

    $scope.selectedTab = function (setTab) {
        $scope.tab = setTab;
    };

    $scope.tabClass = function (selectedTab) {
      if (selectedTab === $scope.tab) {
        return "active"
      }
      else {
        return "inactive" 
      }
    };

    }

    return {
    restrict:'EA',
    templateUrl: constants.tabsTemplate,
    link:link
    }   
  }


    angular
    .module('app')
    .directive('tabs',tabs)

})();