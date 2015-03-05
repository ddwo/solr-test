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
/*                vm.sendQuery = function (query) {
                    $http.get(this.getQuery()).success(function (data, status, headers, config) {
                        angular.module('query').
                            controller('QueryController').
                            // TODO: update this with new queryProvider code
                            response = vm.data;
                    }).error(function (data, status, headers, config) {
                        // TODO: figure out why this doesn't work...
                        angular.module('query').
                            controller('QueryController').
                            response = "error!";
                    });
                };*/
            }]
    )
})();