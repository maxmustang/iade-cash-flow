angular
    .module('iade.directives.customer', [])
    .directive('autocomplete', autocomplete)
    
    autocomplete.$inject = [ '$http' ]
    
    function autocomplete($http){
        return function(scope, element, attr){
            source: 
        }
    }