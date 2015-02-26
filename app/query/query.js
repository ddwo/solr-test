/**
 * Created by dwo on 2/25/15.
 */

(function () {
    angular.module('query', []);

    angular.module('query').directive("solrQuery", function() {
        return {
            restrict: 'E',
            templateUrl: "query/solr-query.html"
        };
    });

    angular.module('query').controller('QueryController', ['$http', function ($http) {
            // TODO: replace this with json, possibly?
            this.query = {
                hostname: "localhost",
                port: "8983",
                query: "*:*",
                instance: "solr",
                core: ""
            };
            this.response = {};
            this.submitted = false;
            this.sendQuery = function (query) {
                $http.get(this.getQuery()).success(function (data, status, headers, config) {
                    angular.module('query').
                        controller('QueryController').
                        response = data;

                }).error(function (data, status, headers, config) {
                    angular.module('query').
                        controller('QueryController').
                        response = "error!";
                });
            };
            this.getQuery = function () {
                return "http://" + this.query.hostname + ":" + this.query.port +
                    "/" + this.query.instance + "/" + this.query.core + "/select?q=" +
                    this.query.query + "&wt=json";
            }
        }]
    )
})();