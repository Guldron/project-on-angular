;(function(){

'use strict';

function dataservice($http) {
    return {
        getAvengers: getAvengers
    };

    function getAvengers(url) {
        return $http.get(url)
            .then(getAvengersComplete)
            .catch(getAvengersFailed);

        function getAvengersComplete(response) {
            return response.data;
        }

        function getAvengersFailed(error) {
           console.log('XHR Failed for getAvengers.' + error.data);
        }
    }
}

angular
    .module('app')
    .factory('dataservice', dataservice);
})();