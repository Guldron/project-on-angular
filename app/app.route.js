;
(function () {

    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/Maintain");
        $stateProvider
            .state("Maintain", {
                url: "/Maintain",
                templateUrl: "vendor/templates/maintain.html",
                controller: "maintainController",
                resolve: {getDropDownData: getDropDownData}
            })
            .state("Maintain.search",{
                url:"/:search",
                controller: "searchController",
                templateUrl: "vendor/templates/search.html",
                resolve: {getSearchFormData: getSearchFormData}
            })
            .state('Reports', {
                url: "/Reports",
                templateUrl: "./vendor/templates/reports.html"
            })
            .state('Upload download', {
                url: "/Upload",
                templateUrl: "./vendor/templates/upload.html"
            })
            .state('Maintenance', {
                url: "/Maintenance",
                templateUrl: "./vendor/templates/maintenance.html"
            })
    }


    getDropDownData.$inject = ['dataservice', 'constants'];

    function getDropDownData(dataservice, constants) {
        var url = constants.json.availableSources;
        return dataservice.getData(url)
            .then(function(data){
            return data.sources;
        });
    }

    getSearchFormData.$inject = ['dataservice', 'constants', '$stateParams'];

    function getSearchFormData(dataservice, constants, $stateParams) {
        var search = $stateParams.search;
        var url = constants.json[search.split(' ')[0].toLowerCase()];
        return dataservice.getData(url)
            .then(function (data) {
                return data.definitions;
            })
    }
})();