;
(function () {

    'use strict';

    angular
        .module('app')
        .controller('maintainController', maintainController);

    maintainController.$inject = ['getDropDownData', '$scope'];

    function maintainController(getDropDownData, $scope) {

        $scope.dropDownData = getDropDownData;

    }
})();
