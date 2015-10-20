'use strict';
(function () {
    angular.module('registrationModule').factory('clgDataService', function () {
        return {
            colleges: [{
                "Name": "MIT",
                "Place": "Chennai",
                "State":"TN"
            }]
        };
    });
})();