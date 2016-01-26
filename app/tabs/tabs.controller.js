(function () {

    'use strict';

    tabsController.$inject = ['$scope'];

    function tabsController($scope) {
        var vm = this;

        vm.tabsName = [
            "Maintain commissions",
            "Upload download",
            "Reports",
            "Maintenance"
        ];
    }

    angular
        .module('app')
        .controller('tabsController', tabsController)
})();