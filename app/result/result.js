/**
 * Created by dwo on 2/25/15.
 */

(function() {
    var app = angular.module('result', []);

    angular.module('result').directive("solrResult", function() {
        return {
            restrict: 'E',
            templateUrl: "result/solr-result.html"
        };
    });

})();