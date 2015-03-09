/**
 * Created by dwo on 2/27/15.
 */

(function (){
    angular.module('queryProvider', []).
        provider('queryProvider', queryProvider);

    function queryProvider() {

        var $http = angular.injector(['ng']).get('$http');

        var data;
        var queryData = {
            hostname: "localhost",
            port: '8983',
            query: "*:*",
            instance: "solr",
            core: ""
        };

        var service = {
            getFullQuery: function () {
                return "http://" + queryData.hostname + ":" + queryData.port +
                    "/" + queryData.instance + "/" + queryData.core + "/select?q=" +
                    queryData.query + "&wt=json";
            },
            query: function(newQuery) {
                if(angular.isDefined(newQuery)) {
                    queryData.query = newQuery
                }
                return queryData.query;
            },
            hostname: function(newHostname) {
                if(angular.isDefined(newHostname)) {
                    queryData.hostname = newHostname;
                }
                return queryData.hostname;
            },
            port: function(newPort) {
                if(angular.isDefined(newPort)) {
                    queryData.port = newPort;
                }
                return queryData.port;
            },
            instance: function(newInstance) {
                if(angular.isDefined(newInstance)) {
                    queryData.instance = newInstance;
                }
                return queryData.instance;
            },
            core: function(newCore) {
                if(angular.isDefined(newCore)) {
                    queryData.core = newCore;
                }
                return queryData.core;
            },
            runQuery: function(){
                $http.get(service.getFullQuery()).
                    success(httpSuccess).
                    error(httpError)}
        };

        this.$get = function ($http) {
            return service
        };
        function httpSuccess(newData, status, headers, config){
            data = newData;
        }
        function httpError(date, status, headers, config){
            // TODO: Figure out what to do here...
        }

    }

}());