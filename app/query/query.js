/**
 * Created by dwo on 2/25/15.
 */

(function () {
    angular.module('query', ['queryProvider']);

    angular.module('query').
        controller('QueryController', ['$http', 'queryProvider', queryController]);

    angular.module('query').directive("solrQuery", solrQuery);

    function queryController($http, queryProvider) {
        var vm = this;
        // need explicit binding for the provider to access from the html:
        vm.queryProvider = queryProvider;
        vm.response = {};
        vm.submitted = false;
    }

    function solrQuery () {
        return {
            restrict: 'E',
            templateUrl: "query/solr-query.html"
        };
    }
})();