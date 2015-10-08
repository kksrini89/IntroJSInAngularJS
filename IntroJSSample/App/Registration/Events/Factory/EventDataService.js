'use strict';
(function () {
    var app = angular.module('registrationModule').factory('eventDataService', function () {
        return {
            events: [{
                "C#.Net Basics": "Bangalore",
                "AngularJS Basics":"Bangalore",
                "WPF Basics":"Bangalore",
            }]
        }
    });
})();