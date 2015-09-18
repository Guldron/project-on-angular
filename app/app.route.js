;(function(){

'use strict';

		function config($stateProvider, $urlRouterProvider) {
		    $urlRouterProvider.otherwise("/maintain");
		    $stateProvider
		    .state('/maintain', {
		      url: "/maintain",
		      templateUrl: "./vendor/templates/maintain.html",
		      controller: "maintainController",
		      resolve: {getSelectData: getSelectData}
		    })
		    .state('/reports', {
		      url: "/reports",
		      templateUrl: "./vendor/templates/reports.html"
		    })
		    .state('/upload', {
		      url: "/upload",
		      templateUrl: "./vendor/templates/upload.html"
		    })
		    .state('/maintance', {
		      url: "/maintance",
		      templateUrl: "./vendor/templates/maintance.html"
		    })
		};

		getSelectData.$inject = ['dataservice', 'constants'];
		
		function getSelectData(dataservice, constants) {
			var url = constants.availableSources;
			return dataservice.getData(url);
		};

		angular
		.module('app')
		.config(config);
})();