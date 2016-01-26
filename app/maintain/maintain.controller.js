;
(function () {

    'use strict';

    maintainController.$inject = ['getSelectData', '$scope', 'constants', 'dataservice'];

    function maintainController(getSelectData, $scope, constants, dataservice) {
        var vm = this;
        console.log($scope);
        vm.searchFormData = null;
        vm.selectData = getSelectData.data.response.sources;

        vm.showSearchForm = function (availableSources) {
            var url;
            console.log(availableSources);
            if (availableSources === 'All sources') {
                url = constants.json.allSources;
            } else if (availableSources === 'Mobile') {
                url = constants.json.mobile;
            } else {
                url = constants.json.slam;
            }

            return dataservice.getData(url)
                .then(function (data) {
                    vm.searchFormData = data.data.response.definitions;
                    return vm.searchFormData;
                });
        };

    }


    angular
        .module('app')
        .controller('maintainController', maintainController);
})();
