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
                slam: 'vendor/rest/retrieveTierDetailsSlam.json',
                validateTiers: {
                    all: 'vendor/rest/validateTier.json',
                    mobile: 'vendor/rest/validateTierMobile.json',
                    slam: 'vendor/rest/validateTierSlam.json'
                }
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
                    return "active-header-tab"
                }
                else {
                    return "inactive-header-tab"
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
        .controller('searchController', searchController);

    searchController.$inject = ['$scope', 'constants', 'dataservice','getSearchFormData', '$stateParams'];

    function searchController($scope, constants, dataservice, getSearchFormData, $stateParams) {
        $scope.searchFormData = getSearchFormData;
    }
})();
;
(function () {

    "use strict";

    angular
        .module('app')
        .controller('searchFormController', searchFormController);

    searchFormController.$inject = ['$scope', '$http', 'constants', 'dataservice', '$stateParams'];

    function searchFormController($scope, $http, constants, dataservice, $stateParams) {

        $scope.usingSearch = $stateParams.search;

        $scope.submitDetails = function () {
            if ($scope.searchFormName.$valid) {
                var url = constants.json.validateTiers.all;
                $http.get(url).then(function(response){
                    console.log(response)
                });
                console.log($scope.searchFormName);

            }  else {
                console.log('Form is invalid');
            }
        };
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
            $scope.detailType = "ALPHANUMERIC";
            $scope.regExpNumeric = /^[0-9]*$/;
            $scope.regExpAlphaNumeric = /^[a-zA-Z0-9]*$/;
            $scope.selectTab = 0;
            $scope.selectedTab = selectedTab;
            $scope.tabShow = tabShow;

            function selectedTab(setTab) {
                $scope.selectTab = setTab;
            };

            function tabShow(index) {
                if ($scope.selectTab === index) {
                    return true;
                } else {
                    return false;
                }
            };

            
            /*$scope.tabClass = function (selectedTab) {
                if (selectedTab === $scope.selectTab) {
                    return "active-search-tab"
                }
                else {
                    return "inactive-search-tab"
                }
            };*/
        }



        return {
            restrict: 'EA',
            link: link,
            templateUrl: url,
            controller: "searchFormController",
            scope:{
                searchFormData:"=searchformdata"
            }
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
