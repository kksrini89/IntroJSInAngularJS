'use strict';
(function () {
    var app = angular.module('registrationModule').factory('eventDataService', function () {
        return {
            events: [{
                "topic": "C#.Net Basics",
                "instructor": "Brian",
                "when": "11-Nov-2015"
                //"C#.Net Basics": "Bangalore",
                //"AngularJS Basics": "Bangalore",
                //"WPF Basics": "Bangalore",
            }]
        }
    });
})();