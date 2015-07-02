(function() {
    'use strict';

    function StackExchange(SE, config, options) {
        this._options = options;
        this.init = $q(function(resolve, reject) {
            var errorTimeout = $timeout(reject, options.timeout, false);

            SE.init(angular.extend(config, {
                complete: function() {
                    $timeout.cancel(errorTimeout);
                    resolve();
                }
            }));
        });
    }

    StackExchange.prototype = {
        login: function() {
            /* ... */
        },

        badges: function() {
            /* ... */
        },

        answers: function() {
            /* ... */
        }
    };

    function StackExchangeProvider() {
        this._options = {timeout: 5000};
    }

    StackExchangeProvider.prototype = {
        config: function(config) {
            this._config = config;
            return this;
        },

        site: function(site) {
            this._options.site = site;
        },

        timeout: function(timeout) {
            this._options.timeout = timeout;
            return this;
        },

        $get: function(SE) {
            if (!this._config) {
                throw new Error('App-specific configuration not provided');
            }
            return new StackExchange(SE, this._config, this._options);
        }
    };

    function BadgesController(StackExchange) {
        this.badges = StackExchange.badges();
    }

    function MainController(StackExchange) {
        StackExchange.login();
    }

    angular.module('stackexchange', ['ngResource'])
        .provider('StackExchange', StackExchangeProvider)
        .config(function(StackExchangeProvider) {
            StackExchangeProvider
                .config({
                    clientId  : 5102,
                    secretKey : 'z*seCcFGW36Ap0aayFZ2HA((',
                    channelUrl: 'http://so-browser.parseapp.com/blank'

                })
                .timeout(10000)
                .site('stackoverflow')
        })
        .controller('BadgesController', BadgesController)
        .controller('MainController', MainController);
})();

function StackExchangeProvider() {
    this._options = {timeout: 5000};
}

StackExchangeProvider.prototype = {
    /* ... */
    $get: function(SE) {
        if (!this._config) {
            throw new Error('App-specific configuration not provided');
        }
        return new StackExchange(SE, this._config, this._options);
    }
};

.config(function(StackExchangeProvider) {
    StackExchangeProvider
        .config({
            clientId  : 5102,
            secretKey : 'z*seCcFGW36Ap0aayFZ2HA((',
            channelUrl: 'http://so-browser.parseapp.com/blank'

        })
        .timeout(10000)
        .site('stackoverflow')
})
