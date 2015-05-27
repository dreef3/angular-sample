angular.module('Test', [])
  .service('CoolService', function () {/* ... */})
  // Simple syntax
  // Will turn into function (a, b) after minification
  .controller('SuperController',
  function ($scope, CoolService) {
    // ...
  })
  // Array syntax
  .controller('SuperController', ['$scope', 'CoolService',
    function ($scope, CoolService) {
      // ...
    }]);

// Component with $inject property
function SuperController($scope, CoolService) {/* ... */
}
SuperController.$inject = ['$scope', 'CoolService'];
angular.module('Test')
  .controller('SuperController', SuperController);
