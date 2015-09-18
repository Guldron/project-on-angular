;(function(){

'use strict';

dataservice.$inject = ['$http'];

function dataservice($http) {

    return {
        getData: getData
    };

    function getData(url) {
        return $http.get(url);
    }
}

angular
    .module('app')
    .factory('dataservice', dataservice);
})();