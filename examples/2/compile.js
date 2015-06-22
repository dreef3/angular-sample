angular.module('compile', []).directive('compiled', function() {
    return {
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) { ... },
                post: function postLink(scope, iElement, iAttrs, controller) { ... }
            };
            // or
            return function postLink( ... ) { ... };
        },
        // or
        link: {
          pre: function preLink(scope, iElement, iAttrs, controller) { ... },
          post: function postLink(scope, iElement, iAttrs, controller) { ... }
        },
        // or
        link: function postLink( ... ) { ... }
    }
});
function link(scope, element, attrs) {
    var format,
        timeoutId;

    function updateTime() {
        element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
        format = value;
        updateTime();
    });

    element.on('$destroy', function() {
        $interval.cancel(timeoutId);
    });

    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
        updateTime(); // update DOM
    }, 1000);
}
