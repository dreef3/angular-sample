angular.module('templates')
    .directive('inlineTemplate', function() {
        return {
            template: '<h3>Hi, I am a directive with inline template</h3>'
        }
    })
    .directive('templateUrl', function() {
        return {
            templateUrl: 'templateUrl.html'
        }
    });
