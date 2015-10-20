'use strict';
(function () {
    angular.module('registrationModule').controller('clgController', ['$scope', 'clgDataService', function ($scope, clgDataService) {
        angular.extend($scope, {
            colleges: clgDataService.colleges
        });
        $scope.IntroJsDemoClick = function () {
            var intro = introJs();
            intro.setOptions = {
                steps: [{
                    element: document.querySelector('#homeId'),
                    intro: 'Home page'
                }, {
                    element: document.querySelector('#clgId'),
                    intro: 'You can view the College Details'
                },
                {
                    element: document.querySelector('#eveId'),
                    intro: 'You can view the event details'
                }],
                showStepNumbers: true,
                showBullets: false,
                exitOnOverlayClick: false,
                exitOnEsc: true,
                nextLabel: '<strong>NEXT</strong>',
                prevLabel: '<span>PREV</span>',
                skipLabel: 'EXIT',
                doneLabel: 'DONE'
            }
            intro.start();
        };
    }]);
})();