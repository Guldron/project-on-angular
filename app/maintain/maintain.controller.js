;(function(){

'use strict';

maintainController.$inject = ['getSelectData', '$scope', 'constants','dataservice'];

function maintainController(getSelectData, $scope, constants, dataservice) {
    $scope.searchFormData = null;
    $scope.selectData = getSelectData.data.response.sources;


    $scope.showSearchForm = function (availableSources) {                                                   
        var detailsUrl = constants.restJson.details;
        var url;
        
        for (var key in $scope.selectData) {
            if (availableSources === $scope.selectData[key]) {
                $scope.nameForSearching = key;
                for (var detail in detailsUrl) {
                    if (availableSources === detail){
                        url = detailsUrl[detail];
                        $scope.whichDatailSelect = detail;
                    }
                }
            }
        }

        return dataservice.getData(url)
            .then(function(data) {
            $scope.searchFormData = data.data.response.definitions;
            console.log($scope.searchFormData);
            return $scope.searchFormData;
        });
	}; 
};


angular
    .module('app')
    .controller('maintainController', maintainController);
})();