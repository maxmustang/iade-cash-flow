angular
    .module('iade.flow.factory')
    .factory('memberFactory', memberFactory)
    
    memberFactory.$inject = ['$http']
    
    function memberFactory($http){
        return {
            findByMemberName: findByMemberName
        }
        
        
        function findByMemberName(name){
            return  [
              'Max','Sapo', 'Hudson'
            ]
        }
    }