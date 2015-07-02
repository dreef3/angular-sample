function dataParserFactory() {
    var phoneRegex = '^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$';

    return function dataParser(data) {
        /* ... parse data somehow */
    }
}

function MessagesFactory($resource, $q) {
    function Messages() {
        /* ... */
    }

    Messages.prototype = {/* ... */};
    return new Messages();
}

function Contacts($resource, $q) {
    this._resource = $resource(/* ... */);
}

Contacts.prototype = {/* ... */};

angular.module('lodash', []).constant('_', window._);
angular.module('d3', []).value('d3', window.d3);
angular.module('flavors', ['lodash', 'd3'])
    .constant('apiKey', '12B4-5A')
    .factory('exportParser', dataParserFactory)
    .factory('Messages', MessagesFactory)
    .service('Contacts', Contacts);
