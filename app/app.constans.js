;
(function () {

    'use strict';

    angular
        .module('app.constants', [])
        .constant('constants', {
            templates: {
                tabs: 'vendor/templates/tabs.directive.html',
                maintain: 'vendor/templates/maintain.html',
                dropDown: 'vendor/templates/drop-down.directive.html',
                searchForm: 'vendor/templates/search-form.directive.html',
                searchResults: 'vendor/templates/search-form.directive.html'
            },

            json: {
                availableSources: 'vendor/rest/retrieveAvailableSources.json',
                all: 'vendor/rest/retrieveTierDetails.json',
                mobile: 'vendor/rest/retrieveTierDetailsMobile.json',
                slam: 'vendor/rest/retrieveTierDetailsSlam.json',
                validateTiers: {
                    all: 'vendor/rest/validateTier.json',
                    mobile: 'vendor/rest/validateTierMobile.json',
                    slam: 'vendor/rest/validateTierSlam.json'
                }
            }
        });

})();
