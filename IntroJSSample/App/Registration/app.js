'use strict';
(function () {
    var app = angular.module('registrationModule', ['ui.router']);
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('College', {
            url: '/college',
            templateUrl: 'App/Registration/College/Partial/college.html',
            controller: 'clgController'
        });
        $stateProvider.state('Event', {
            url: '/event',
            templateUrl: 'App/Registration/Events/Partial/event.html',
            controller: 'eventController'
        });
    }]);
})();