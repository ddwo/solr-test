/**
 * Created by dwo on 2/27/15.
 */
(function () {
    angular.module('queryService', []).
        provider('queryProvider', queryProvider);

    function queryProvider() {
        var query = {
            hostname: "localhost",
            port: 8983,
            query: "*:*",
            instance: "solr",
            core: ""
        };

        var service = {
            getQuery: function () {
                return "http://" + query.hostname + ":" + query.port +
                    "/" + query.instance + "/" + query.core + "/select?q=" +
                    query.query + "&wt=json";
            },
            // TODO: fix query so there isn't any namespace collision...
            setQuery: function (hostname, port, query, instance, core) {
                query.hostname = hostname;
                query.port = port;
                query.instance = instance;
                query.core = core;
            }

        };

        this.$get = function () {
            return service
        }

    }

}());