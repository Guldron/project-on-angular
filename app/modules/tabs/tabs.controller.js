(function () {

    'use strict';

    angular
        .module('app')
        .controller('tabsController', tabsController)

    tabsController.$inject = ['$scope'];

    function tabsController($scope) {

        this.tabsName = [
            "Maintain commissions",
            "Upload download",
            "Reports",
            "Maintenance"
        ];
    }
})();