;
(function () {

    "use strict";

    angular
        .module('app')
        .controller('searchFormController', searchFormController);

    searchFormController.$inject = ['$scope', '$http', 'constants', 'dataservice', '$stateParams'];

    function searchFormController($scope, $http, constants, dataservice, $stateParams) {

        $scope.usingSearch = $stateParams.search;

        $scope.submitDetails = function () {
            if ($scope.searchFormName.$valid) {
                var url = constants.json.validateTiers.all;
                $http.get(url).then(function(response){
                    console.log(response)
                });
                console.log($scope.searchFormName);

            }  else {
                console.log('Form is invalid');
            }
        };
    }
})();
