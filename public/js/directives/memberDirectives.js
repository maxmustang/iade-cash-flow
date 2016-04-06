angular
    .module('iade.directives')
    .directive('autoComplete', autocomplete)
    
    autocomplete.$inject = [ '$http', 'memberFactory' ]
    
    function autocomplete($http, memberFactory){
        var ddo = {}
        ddo.restrict = 'A'
        ddo.scope = {
            'ngModel': '='
        }
        ddo.link = function(scope, element, attrs){
            element.autocomplete({
                source: function(request, response){
                    response(memberFactory.findByMemberName(1))
                }
            })
        }
        
        return ddo;
    }