;
(function () {

    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/maintain");
        $stateProvider
            .state("maintain", {
                url: "/maintain",
                templateUrl: "vendor/templates/maintain.html",
                controller: "maintainController",
                resolve: {getSelectData: getSelectData}
            })
            .state("maintain.search",{
                url:"/maintain/:search/",
                template: '<search-form class="search"></search-form>'
            })
            .state('reports', {
                url: "/reports",
                templateUrl: "./vendor/templates/reports.html"
            })
            .state('upload download', {
                url: "/upload",
                templateUrl: "./vendor/templates/upload.html"
            })
            .state('maintenance', {
                url: "/maintenance",
                templateUrl: "./vendor/templates/maintenance.html"
            })
    };


    getSelectData.$inject = ['dataservice', 'constants'];

    function getSelectData(dataservice, constants) {
        var url = constants.json.availableSources;
        return dataservice.getData(url);
    }
})();