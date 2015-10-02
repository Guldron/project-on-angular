;(function(){

	"use strict";

	searchFormController.$inject = ['$scope','constants','dataservice'];

	function searchFormController($scope, constants, dataservice) {

		var validateUrls = constants.restJson.validateTiers;
        console.log($scope);
		$scope.submitDetails = function(){
            var url;
            for (var key in validateUrls) {
                if ($scope.whichDatailSelect === key){
                    url = validateUrls[key];
                    console.log(url);
                }; 
            };

            return dataservice.getData(url)
                .then(function(data) {
                $scope.validateDetailsData = data.data;
                console.log($scope.validateDetailsData);
                return $scope.validateDetailsData;  
            });  
        };

	};

	angular
		.module('app')
		.controller('searchFormController',searchFormController);
})();