angular
    .module('iade.flow.factory')
    .factory('userFactory', userFactory)
    
    userFactory.$inject = ['$http']
    
    function userFactory($http){
        return {
            findUserByName: findUserByName
        }
        
        
        function findUserByName(name){
            return  [
                {
                    '_id': 1,
                    'name':'Max'
                },
                {
                    '_id': 2,
                    'name': 'Sapo'
                }
            ]
        }
    }