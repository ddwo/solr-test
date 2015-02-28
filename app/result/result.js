/**
 * Created by dwo on 2/25/15.
 */

(function () {
    angular.module('result', ['queryProvider']);

    angular.module('result').
        controller('ResultController', ResultController);

    function ResultController() {
        // TODO; Fill in
    }

    angular.module('result').
        directive("solrResult", solrResult());

    function solrResult() {
        return {
            restrict: 'E',
            templateUrl: "result/solr-result.html"
        }
    }

})();
