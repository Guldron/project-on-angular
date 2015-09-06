;(function(){

'use strict';

function TabsController() {

	var vm = this;

	vm.tab = 1;

	vm.selectTab = function(setTab) {
		vm.tab = setTab;
	};

	vm.isSelected = function (checkTab) {
		if (vm.tab === checkTab) {
			return "active"; } 
		else {
			return "inactive";}
	};

};

angular
    .module('app')
    .controller('TabsController', TabsController);

})();

