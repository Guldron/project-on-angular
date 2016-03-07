;
(function () {

    "use strict";

    angular
        .module('app')
        .controller('searchFormController', searchFormController);

    searchFormController.$inject = ['$scope', 'constants', 'dataservice','getSearchFormData', '$stateParams'];

    function searchFormController($scope, constants, dataservice, getSearchFormData, $stateParams) {
        $scope.searchFormData = getSearchFormData;
        $scope.usingSearch = $stateParams.search;
        console.log($scope.searchFormData);
    }
})();
