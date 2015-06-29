(function() {
    'use strict';

    function BadgesListController(StackOverflow) {
        this.badges = StackOverflow.badges();
    }

    angular.module('soBrowser.badges').controller('BadgesListController', BadgesListController);
})();
