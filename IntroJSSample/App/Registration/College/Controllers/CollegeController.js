'use strict';
(function () {
    angular.module('registrationModule').controller('clgController', ['$scope', 'clgDataService', function ($scope, clgDataService) {
        angular.extend($scope, {
            colleges: clgDataService.colleges
        });
    }]);
})();