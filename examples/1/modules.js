// Initialize the module with two arguments
var moduleInstance = angular.module(
  // Name of the module
  'SuperApp',
  // Names of modules this one depends on
  ['ngResource', 'ngRoute']
);

moduleInstance
  // Only providers, constants
  .config(function () {
    console.log(1);
  })
  // Only instances, constants
  .run(function () {
    console.log(2);
  });
