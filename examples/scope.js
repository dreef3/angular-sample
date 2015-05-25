angular.module('SuperApp', [])
    // Root
    .run(function ($rootScope) {
        $rootScope.photos = [
            {url: '/assets/1.jpg', name: 'Republic XF-91 Thunderceptor'},
            {url: '/assets/2.jpg', name: 'F-94C'},
            {url: '/assets/3.jpg', name: 'Balfour studies skyscrapers'}
        ];
    })
    // Child
    .controller('PhotosController', function ($scope) {
        $scope.shape = 'img-rounded';
    })
    // Isolated
    .directive('photo', function () {
        return {
            scope:       {url: '=', title: '=', shape: '='},
            templateUrl: 'photo.html'
        }
    });
angular.element(document).ready(function () {
    angular.bootstrap(document, ['SuperApp']);
});
