;(function(){

"use strict";

searchForm.$inject = ['constants'];

function searchForm(constants){
    var url = constants.templates.searchForm;

    function link($scope, $element, $attrs){
        $scope.selectTab = 1;

    $scope.selectedTab = function (setTab) {
        $scope.selectTab = setTab;
    };

    $scope.tabClass = function (selectedTab) {
      if (selectedTab === $scope.selectTab) {
        return "active"
      }
      else {
        return "inactive" 
      }
    };
    
    $scope.isSelect = function() {
        
    }
    
            
    }; 
        
    return {
        restrict:'EA',
        templateUrl: url,
        controller: 'searchFormController',
        link:link
    }   
};

angular
    .module('app')
    .directive('searchForm',searchForm)
})();