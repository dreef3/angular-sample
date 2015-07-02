angular.module('soBrowser').factory('StackOverflow', function($q, $timeout, $resource, SE) {
    'use strict';

    function StackOverflow() {
        this.init = $q(function(resolve, reject) {
            var errorTimeout = $timeout(reject, 5000, false);

            SE.init({
                clientId  : 5102,
                key       : 'z*seCcFGW36Ap0aayFZ2HA((',
                channelUrl: 'http://so-browser.parseapp.com/blank',
                complete  : function() {
                    $timeout.cancel(errorTimeout);
                    resolve();
                }
            });
        });
    }

    StackOverflow.prototype = {
        login: function() {
            this.loggedIn = $q(function(resolve, reject) {
                SE.authenticate({
                    success: resolve,
                    error: reject,
                    scope: ['no_expiry']
                });
            }).then((function(result) {
                this._accessToken = result.accessToken;
            }).bind(this));

            return this.loggedIn;
        },

        getResource: function() {
            return this._resource || (this._resource = this.createResource());
        },

        createResource: function() {
            function unwrapTransformer(data) {
                data = angular.fromJson(data);
                return data && data.items ? data.items : data;
            }

            var HOST = 'https://api.stackexchange.com/2.2';
            var defaults = {/*withCredentials: true, */cache: true};
            return $resource(HOST, {
                accessToken: this._accessToken,
                site: 'stackoverflow'
            }, {
                badges: angular.extend({
                    method: 'GET', isArray: true, url: HOST + '/badges', transformResponse: unwrapTransformer
                }, defaults)
            });
        },

        badges: function() {
            return this.getResource().badges().$promise.then(function(response) {
                return response.items;
            });
        }
    };

    return new StackOverflow();
});
