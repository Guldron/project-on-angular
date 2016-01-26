;
(function () {

    'use strict';

    angular
        .module('app.constants', [])
        .constant('constants', {
            templates: {
                tabs: 'vendor/templates/tabs.directive.html',
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