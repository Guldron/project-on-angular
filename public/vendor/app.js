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
                dropdown: 'vendor/templates/drop-down.directive.html',
                searchForm: 'vendor/templates/search-form.directive.html',
                searchResults: 'vendor/templates/search-form.directive.html'
            },

            json: {
                availableSources: 'vendor/rest/retrieveAvailableSources.json',
                allSources: 'vendor/rest/retrieveTierDetails.json',
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
            return $http.get(url);
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
                return link.split(' ')[0].toLowerCase();
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

    maintainController.$inject = ['getSelectData', '$scope', 'constants', 'dataservice','$state', '$stateParams'];

    function maintainController(getSelectData, $scope, constants, dataservice, $stateParams) {

        $scope.$broadcast('dropDownData', 'getSelectData');

        console.log($scope);
        console.log(getSelectData);

        /*var that = this;
        $scope.searchFormData = false;
        $scope.selectData = getSelectData.data.response.sources;
        $scope.getSearchFormData = getSearchFormData;

        function getSearchFormData (availableSources) {
            var url;
            if (availableSources === 'All sources') {
                url = constants.json.allSources;
                console.log($stateParams);

            } else if (availableSources === 'Mobile') {
                url = constants.json.mobile;
                $state.go('Maintain.form',{search:'mobile'});
            } else {
                url = constants.json.slam;
                $state.go('Maintain.form',{search:'slam'});
            }
            return dataservice.getData(url)
                .then(dataDefinitions);
        }
        console.log($scope);


        function dataDefinitions (data) {
            $scope.searchFormData = data.data.response.definitions;
            return $scope.searchFormData;
        }*/

    }
})();

;
(function () {

    'use strict';

    angular
        .module('app')
        .controller('dropDownController', dropDownController);

    dropDownController.$inject = ['$scope', 'constants', 'dataservice','$state', '$stateParams'];

    function dropDownController($scope, constants, dataservice, $stateParams) {

        $scope.$on('dropDownData', function (event, data) {
            console.log(data);
            $scope.selectData = data.data.response.sources;
        });

        /*var that = this;
        $scope.searchFormData = false;
        $scope.getSearchFormData = getSearchFormData;

        function getSearchFormData (availableSources) {
            var url;
            if (availableSources === 'All sources') {
                url = constants.json.allSources;
                console.log($stateParams);

            } else if (availableSources === 'Mobile') {
                url = constants.json.mobile;
                $state.go('Maintain.form',{search:'mobile'});
            } else {
                url = constants.json.slam;
                $state.go('Maintain.form',{search:'slam'});
            }
            return dataservice.getData(url)
                .then(dataDefinitions);
        }
        console.log($scope);


        function dataDefinitions (data) {
            $scope.searchFormData = data.data.response.definitions;
            return $scope.searchFormData;
        }*/

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

        var url = constants.templates.dropdown;
        console.log(url);


        function link($scope, $element, $attrs) {
            $scope.$on('dropDownData', function (event, data) {
                console.log(data);
                $scope.selectData = data.data.response.sources;
            });
        }

        return {
            restrict: 'EA',
            url: url,
            scope: {},
            controller: 'dropDownController',
            controllerAs: 'dropDown',
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

    searchFormController.$inject = ['$scope', 'constants', 'dataservice','$stateParams'];

    function searchFormController($scope, constants, dataservice, $stateParams) {

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
            $scope.form.selectTab = 1;

            $scope.form.selectedTab = function (setTab) {
                console.log(setTab);
                $scope.form.selectTab = setTab;
            };

            $scope.form.tabClass = function (selectedTab) {
                if (selectedTab === $scope.form.selectTab) {
                    return "active"
                }
                else {
                    return "inactive"
                }
            };

            $scope.form.isSelect = function () {
            }
        }

        return {
            restrict: 'EA',
            templateUrl: url,
            scope:{
                searchFormData: "="
            },
            controller: 'searchFormController',
            controllerAs: 'form',
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
