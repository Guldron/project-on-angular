;
(function () {

    'use strict';

    angular
        .module('app')
        .controller('dropDownController', dropDownController);

    dropDownController.$inject = ['$scope','$rootScope', '$state'];

    function dropDownController($scope, $rootScope, $state) {

        $scope.dropDownChange = function (value){
            return $state.go('Maintain.search', {search: value})
        };

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                if($scope.selectedElement !== toParams.search){
                    $scope.selectedElement = toParams.search;
                }
            })

    }
})();
