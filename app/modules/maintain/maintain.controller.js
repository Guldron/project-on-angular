;
(function () {

    'use strict';

    angular
        .module('app')
        .controller('maintainController', maintainController);

    maintainController.$inject = ['getSelectData', '$scope', 'constants', 'dataservice','$state', '$stateParams'];

    function maintainController(getSelectData, $scope, constants, dataservice, $stateParams) {

        $scope.$broadcast('dropDownData', 'getSelectData');

        console.log($scope);
        console.log(getSelectData);

        /*var that = this;
        $scope.searchFormData = false;
        $scope.selectData = getSelectData.data.response.sources;
        $scope.getSearchFormData = getSearchFormData;

        function getSearchFormData (availableSources) {
            var url;
            if (availableSources === 'All sources') {
                url = constants.json.allSources;
                console.log($stateParams);

            } else if (availableSources === 'Mobile') {
                url = constants.json.mobile;
                $state.go('Maintain.form',{search:'mobile'});
            } else {
                url = constants.json.slam;
                $state.go('Maintain.form',{search:'slam'});
            }
            return dataservice.getData(url)
                .then(dataDefinitions);
        }
        console.log($scope);


        function dataDefinitions (data) {
            $scope.searchFormData = data.data.response.definitions;
            return $scope.searchFormData;
        }*/

    }
})();
