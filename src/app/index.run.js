(function() {
  'use strict';

  angular
    .module('angularSample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
