'use strict';

var app = angular.module('store', ['ngRoute','tabsController']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: '/partials/maintain.html'
	})

	.when('/maintain',{
		templateUrl: '/partials/maintain.html'
	})

	.when('/reports',{
		templateUrl: '/partials/reports.html'
	})

	.when('/upload',{
		templateUrl: '/partials/upload.html'
	})

	.when('/maintance',{
		templateUrl: '/partials/maintance.html'
	})
});

