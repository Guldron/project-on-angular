;
(function () {

    'use strict';

    angular
        .module('app', ['ui.router',
            'app.constants'
        ])

})();
;
(function () {

    'use strict';

    angular
        .module('app.constants', [])
        .constant('constants', {
            templates: {
                tabs: 'vendor/templates/tabs.directive.html',
                maintain: 'vendor/templates/maintain.html',
                dropDown: 'vendor/templates/drop-down.directive.html',
                searchForm: 'vendor/templates/search-form.directive.html',
                searchResults: 'vendor/templates/search-form.directive.html'
            },

            json: {
                availableSources: 'vendor/rest/retrieveAvailableSources.json',
                all: 'vendor/rest/retrieveTierDetails.json',
                mobile: 'vendor/rest/retrieveTierDetailsMobile.json',
                slam: 'vendor/rest/retrieveTierDetailsSlam.json'
                /*validateTiers: {
                    'All sources': 'vendor/rest/validateTier.json',
                    'Mobile': 'vendor/rest/validateTierMobile.json',
                    'SLAM': 'vendor/rest/validateTierSlam.json'
                }*/
            }
        });

})();
;
(function () {

    'use strict';

    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {

        return {
            getData: getData
        };

        function getData(url) {
            return $http.get(url)
                .then(function(data){
                    return data.data.response;
                });
        }
    }
})();
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
                templateUrl: "vendor/templates/search-form.directive.html",
                controller: "searchFormController",
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
(function () {

    'use strict';

    angular
        .module('app')
        .controller('tabsController', tabsController);

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
;
(function () {

    'use strict';

    angular
        .module('app')
        .directive('tabs', tabs);

    function tabs(constants) {

        var url = constants.templates.tabs;

        function link($scope, $element, $attrs, tabs) {

            $scope.tabs.tab = 0;

            $scope.tabs.links = $scope.tabs.tabsName.map(function(link) {
                return link.split(' ')[0];
            });

            $scope.tabs.linksName = function(index){
                return $scope.tabs.links[index]
            };

            $scope.tabs.selectedTab = function (setTab) {
                $scope.tabs.tab = setTab;
            };

            $scope.tabs.tabClass = function (selectedTab) {
                if (selectedTab === $scope.tabs.tab) {
                    return "active"
                }
                else {
                    return "inactive"
                }
            };
        }

        return {
            restrict: 'EA',
            templateUrl: url,
            link: link,
            controller: "tabsController",
            controllerAs: "tabs"
        }
    }
})();
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

;
(function () {

    "use strict";

    angular
        .module('app')
        .directive('maintain', maintain);

    function maintain() {


        function link($scope, $element, $attrs) {
        }

        return {
            restrict: 'EA',
            controller: 'maintainController',
            link: link
        }
    }
})();
;
(function () {

    'use strict';

    angular
        .module('app')
        .controller('dropDownController', dropDownController);

    dropDownController.$inject = ['$scope','$rootScope', '$state'];

    function dropDownController($scope, $rootScope, $state) {

        $scope.dropDownChange = function (value){
            return $state.go('Maintain.search', {search: value})
        };

        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                if($scope.selectedElement !== toParams.search){
                    $scope.selectedElement = toParams.search;
                }
            })

    }
})();

;
(function () {

    "use strict";

    angular
        .module('app')
        .directive('dropDown', dropDown);

    dropDown.$inject = ['constants'];

    function dropDown(constants) {

        var url = constants.templates.dropDown;

        function link($scope, $element, $attrs) {

        }

        return {
            restrict: 'EA',
            templateUrl: url,
            scope:{
                dropDownData: "=dropdowndata"
            },
            controller: 'dropDownController',
            link: link
        }
    }
})();
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

;
(function () {

    "use strict";

    angular
        .module('app')
        .directive('searchForm', searchForm);

    searchForm.$inject = ['constants'];

    function searchForm(constants) {

        var url = constants.templates.searchForm;

        function link($scope, $element, $attrs) {

            $scope.selectTab = 1;

            $scope.selectedTab = function (setTab) {
                console.log(setTab);
                $scope.selectTab = setTab;
            };

            $scope.tabClass = function (selectedTab) {
                if (selectedTab === $scope.selectTab) {
                    return "active"
                }
                else {
                    return "inactive"
                }
            };

            $scope.isSelect = function () {
            }
        }

        return {
            restrict: 'EA',
            scope:{},
            controller: 'searchFormController',
            link: link
        }
    }
})();

// ;(function(){

// "use strict";

// searchResultsController.$inject = ['$scope','constants'];

// function searchResultsController($scope, constants) {

// };

// angular
// 	.module('app')
// 	.controller('searchResultsController', searchResultsController)
// })();
/*
;(function(){

"use strict";

searchResults.$inject = ['constants'];

function searchResults(constants) {
	var url = constants.templates.searchResults;
	
	function link($scope, $element, $attrs){
            
     };
    
	return {
	    restrict:'EA',
	    templateUrl: url,
	    controller: 'searchResultsController',
	    link:link
	}
};

angular
	.module('app')
	.directive('searchResults', searchResults)
})();*/
