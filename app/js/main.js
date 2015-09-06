;(function(){

'use strict';

	angular
		.module('app', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise("/maintain");
	    $stateProvider
	    .state('/', {
	      url: "/maintain",
	      templateUrl: "partials/maintain.html"
	    })
	    .state('/maintain', {
	      url: "/maintain",
	      templateUrl: "partials/maintain.html"
	    })
	    .state('/reports', {
	      url: "/reports",
	      templateUrl: "partials/reports.html"
	    })
	    .state('/upload', {
	      url: "/upload",
	      templateUrl: "partials/upload.html"
	    })
	    .state('/maintance', {
	      url: "/maintance",
	      templateUrl: "partials/maintance.html"
	    })
	});
})();

