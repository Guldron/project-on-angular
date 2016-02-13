;
(function () {

    "use strict";

    angular
        .module('app')
        .controller('searchFormController', searchFormController);

    searchFormController.$inject = ['$scope', 'constants', 'dataservice','$stateParams'];

    function searchFormController($scope, constants, dataservice, $stateParams) {

    }
})();
