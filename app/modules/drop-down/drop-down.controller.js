;
(function () {

    'use strict';

    angular
        .module('app')
        .controller('dropDownController', dropDownController);

    dropDownController.$inject = ['$scope', 'constants', 'dataservice','$state', '$stateParams'];

    function dropDownController($scope, constants, dataservice, $stateParams) {

        $scope.$on('dropDownData', function (event, data) {
            console.log(data);
            $scope.selectData = data.data.response.sources;
        });

        /*var that = this;
        $scope.searchFormData = false;
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
