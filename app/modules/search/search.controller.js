;
(function () {

    "use strict";

    angular
        .module('app')
        .controller('searchController', searchController);

    searchController.$inject = ['$scope', 'constants', 'dataservice','getSearchFormData', '$stateParams'];

    function searchController($scope, constants, dataservice, getSearchFormData, $stateParams) {
        $scope.searchFormData = getSearchFormData;
    }
})();