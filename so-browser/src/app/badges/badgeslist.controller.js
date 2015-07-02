(function() {
    'use strict';

    angular.module('soBrowser.badges').controller('BadgesListController', BadgesListController);

    /** @ngInject */
    function BadgesListController(StackOverflow) {
        this.badges = StackOverflow.badges();
    }
})();
