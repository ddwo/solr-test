/**
 * Created by dwo on 2/27/15.
 */
(function () {
    angular.module('queryProvider', []).
        provider('queryProvider', queryProvider);

    function queryProvider() {
        var fullQuery = {
            hostname: "localhost",
            port: '8983',
            query: "*:*",
            instance: "solr",
            core: ""
        };

        var service = {
            getFullQuery: function () {
                return "http://" + fullQuery.hostname + ":" + fullQuery.port +
                    "/" + fullQuery.instance + "/" + fullQuery.core + "/select?q=" +
                    fullQuery.query + "&wt=json";
            },
            query: function(newQuery) {
                if(angular.isDefined(newQuery)) {
                    fullQuery.query = newQuery
                }
                return fullQuery.query;
            },
            hostname: function(newHostname) {
                if(angular.isDefined(newHostname)) {
                    fullQuery.hostname = newHostname;
                }
                return fullQuery.hostname;
            },
            port: function(newPort) {
                if(angular.isDefined(newPort)) {
                    fullQuery.port = newPort;
                }
                return fullQuery.port;
            },
            instance: function(newInstance) {
                if(angular.isDefined(newInstance)) {
                    fullQuery.instance = newInstance;
                }
                return fullQuery.instance;
            },
            core: function(newCore) {
                if(angular.isDefined(newCore)) {
                    fullQuery.core = newCore;
                }
                return fullQuery.core;
            }
        };

        this.$get = function () {
            return service
        }

    }

}());