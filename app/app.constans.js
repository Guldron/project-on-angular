(function(){

  'use strict';

  	angular
  	.module('app.constants',[])
  	.constant('constants', {
  		tabsTemplate : 'vendor/templates/tabs.directive.html',
  		availableSources: 'vendor/rest/retrieveAvailableSources.json'
  	});

})();