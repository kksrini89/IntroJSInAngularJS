'use strict';
(function () {
    angular.module('registrationModule').controller('eventController', ['$scope', 'eventDataService', function ($scope,eventDataService) {
        angular.extend($scope, {
            events: eventDataService.events
        });
    }]);
})();