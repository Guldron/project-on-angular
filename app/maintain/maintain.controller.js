;(function(){

'use strict';

function maintainController(dataservice, constants, $scope) {

    $scope.getData = function() {
        return dataservice.getAvengers(constants.availableSources)
            .then(function(data) {
                $scope.sources = data.response.sources;
                return $scope.sources;
            });
    }

    $scope.selectedData = {};

    $scope.getData();

    console.log($scope);
}



angular
    .module('app')
    .controller('maintainController', maintainController);

})();