'use strict';
(function () {
    angular.module('registrationModule').controller('clgController', ['$scope', 'clgDataService', function ($scope, clgDataService) {
        angular.extend($scope, {
            colleges: clgDataService.colleges
        });

        $scope.IntroDemo = function () {
            var intro = introJs();

            intro.setOptions({
                steps: [{
                    element: document.querySelector('#homeId'),
                    intro: '<p>Home Page</p>'
                }, {
                    element: document.querySelector('#clgId'),
                    intro: '<p>You can see the College Details which conducts events</p>'
                }, {
                    element: document.querySelector('#eveId'),
                    intro: '<p>Event Details</p>'
                }],
                showStepNumbers: true,
                showBullets: true,
                exitOnOverlayClick: false,
                exitOnEsc: true,
                tooltipPosition: 'auto',
                nextLabel: 'NEXT',
                prevLabel: 'PREV',
                skipLabel: 'SKIP',
                doneLabel: '<strong style="color:green">DONE</strong>'
            });

            intro.start();
        };

    }]);
})();