;(function(){

'use strict';

maintainController.$inject = ['getSelectData', '$scope'];

function maintainController(getSelectData, $scope) {
    $scope.selectData = getSelectData.data.response.sources;

}

angular
    .module('app')
    .controller('maintainController', maintainController);

})();