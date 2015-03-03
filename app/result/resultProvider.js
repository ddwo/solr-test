/**
 * Created by dwo on 2/28/15.
 */

(function () {
    angular.module('resultService', []).
        provider('resultProvider', resultProvider);

    function resultProvider() {

        var service = {

        }
        this.$get = function(){
            return service
        }
    }

});