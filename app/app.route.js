;(function(){

'use strict';

	angular
		.module('app')
		.config(function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise("/maintain");
	    $stateProvider
	    .state('/maintain', {
	      url: "/maintain",
	      templateUrl: "./vendor/templates/maintain.html"
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
	});
})();