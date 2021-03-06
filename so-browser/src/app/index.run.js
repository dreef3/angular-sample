(function() {
    'use strict';

    angular
        .module('soBrowser')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, StackOverflow) {

        $log.debug('runBlock end');

        StackOverflow.login().then(function() {
            return StackOverflow.badges().$promise
        }).then(function() {
            console.log(arguments);
        });
    }
})();
