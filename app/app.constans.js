;(function(){

  'use strict';

  	angular
  	.module('app.constants',[])
  	.constant('constants', {
  		templates: { 
  			tabs : 'vendor/templates/tabs.directive.html',
  			searchForm : 'vendor/templates/search-form.directive.html',
        searchResults : 'vendor/templates/search-form.directive.html'
  		},

  		restJson: {
  			availableSources: 'vendor/rest/retrieveAvailableSources.json',
            details: {
                'All sources': 'vendor/rest/retrieveTierDetails.json',
                'Mobile': 'vendor/rest/retrieveTierDetailsMobile.json',
                'SLAM': 'vendor/rest/retrieveTierDetailsSlam.json',
                },
            validateTiers: {
                'All sources': 'vendor/rest/validateTier.json',
                'Mobile': 'vendor/rest/validateTierMobile.json',
                'SLAM': 'vendor/rest/validateTierSlam.json',
            }
  		}
  	});

})();