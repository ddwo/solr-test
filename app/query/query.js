/**
 * Created by dwo on 2/25/15.
 */

(function () {
    angular.module('query', ['queryProvider', 'resultProvider']);

    angular.module('query').directive("solrQuery", function () {
        return {
            restrict: 'E',
            templateUrl: "query/solr-query.html"
        };
    });

    angular.module('query').
        controller('QueryController', ['$http', 'queryProvider', 'resultProvider',
            function ($http, queryProvider, resultProvider) {
                var vm = this;
                // need explicit binding for the provider to access from the html:
                vm.queryProvider = queryProvider;
                vm.resultProvider = resultProvider;
                vm.response = {};
                vm.submitted = false;
            }]
    )
})();