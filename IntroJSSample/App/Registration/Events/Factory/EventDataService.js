'use strict';
(function () {
    var app = angular.module('registrationModule').factory('eventDataService', function () {
        return {
            events: [{
                //"C#.Net Basics": "Bangalore",
                //"AngularJS Basics":"Bangalore",
                //"WPF Basics": "Bangalore",
                "name": "AngularJS Basics",
                "instructor": "Brian",
                "when": "11-Nov-2015"
            }]
        }
    });
})();