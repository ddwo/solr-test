/**
 * Created by dwo on 2/25/15.
 */

(function () {
    angular.module('result', ['queryProvider']);

    angular.module('result').
        controller('ResultController', ResultController);

    angular.module('result').
        directive("solrResult", solrResult);

    function ResultController(queryProvider) {
        // TODO; Fill in
        var vm = this;
        //starting index for pagination
        vm.idx = 0;
        // need explicit binding for the provider to access from the html:
        vm.queryProvider = queryProvider;
    }

    function solrResult() {
        return {
            restrict: 'E',
            templateUrl: "result/solr-result.html"
        }
    }

})();
