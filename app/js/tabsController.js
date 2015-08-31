'use strict';

var tabsController = angular.module('tabsController',[]);

app.controller('tabsController',[
	function() {
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	}]);