angular.module('SuperApp')
    .controller('Controller name', function () {
        // Constructor function
    })
    .controller('ProfileController',
    function ($scope, ProfileService) {
        // Set initial state
        $scope.defaultTab = 'About';
        // Add behavior
        $scope.save = function (profile) {
            ProfileService.save(profile);
        }
    })
    .controller('BadController',
    function ($scope, $rootScope) {
        $('.tab').coolTabPlugin();
        $scope.result = function (name) {
            $rootScope.name = name;
        };
    });
