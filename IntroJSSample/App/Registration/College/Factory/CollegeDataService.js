'use strict';
(function () {
    angular.module('registrationModule').factory('clgDataService', function () {
        return {
            colleges: [{
                //"MSV": "Chennai",
                //"MIT": "Chennai",
                //"NIT":"Trichy"
                "name": "MIT",
                "place": "Chennai",
                "state": "TN"
            }]
        }
    });
})();