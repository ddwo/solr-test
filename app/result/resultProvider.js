/**
 * Created by dwo on 2/28/15.
 */

(function (){
    angular.module('resultProvider', []).
        provider('resultProvider', resultProvider);

    function resultProvider() {
        var data;
        var service = {
            createResults : createResults
        };
        this.$get = function(){
            return service
        };

        function createResults (newData) {
            data = newData.response;
        }
    }

}());