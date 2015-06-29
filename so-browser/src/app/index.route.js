(function() {
    'use strict';

    angular
        .module('soBrowser')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('page', {
                templateUrl: 'app/main/page.html',
                abstract   : true
            })
            .state('page.home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller  : 'MainController',
                controllerAs: 'vm'
            })
            .state('page.badges', {
                url         : '/badges',
                templateUrl : 'app/badges/badges.html',
                controller  : 'BadgesListController',
                controllerAs: 'vm'
            });;

        $urlRouterProvider.otherwise('/');
    }

})();
