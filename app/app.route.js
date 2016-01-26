;
(function () {

    'use strict';

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/maintain");
        $stateProvider
            .state('Maintain commissions', {
                url: "/maintain",
                templateUrl: "./vendor/templates/maintain.html",
                controller: "maintainController",
                controllerAs: "maintain",
                resolve: {getSelectData: getSelectData}
            })
            .state('Reports', {
                url: "/reports",
                templateUrl: "./vendor/templates/reports.html"
            })
            .state('Upload download', {
                url: "/upload",
                templateUrl: "./vendor/templates/upload.html"
            })
            .state('Maintenance', {
                url: "/maintenance",
                templateUrl: "./vendor/templates/maintance.html"
            })
    };


    getSelectData.$inject = ['dataservice', 'constants'];

    function getSelectData(dataservice, constants) {
        var url = constants.json.availableSources;
        return dataservice.getData(url);
    };


    angular
        .module('app')
        .config(config);
})();