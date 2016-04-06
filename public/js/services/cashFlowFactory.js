angular
    .module('iade.flow.factory')
    .factory('flowBuilderService', flowBuilderService)
    
    flowBuilderService.$inject = ['$http']
    
    function flowBuilderService($http){
      
        return {
            getLatestFlows: getLatestFlows,
            getTypes: getTypes
        };
        
        function getTypes(){
            return [
                {
                    id: 'dizimo'
                },
                {
                    id: 'água'
                },
                {
                    id: 'luz'
                },
                {
                    id: 'telefone'
                }
           ];
        }
        
        function getLatestFlows(){
            return [
            
                {
                    id: 'ID',
                    flowType: 'ENTRADA',
                    type: 'Dizimo',
                    member:'Max',
                    date: '15/09/1988',
                    value: 400.00,
                    owner: 'Rosimari'
                },
                {
                    id: 'ID',
                    flowType: 'Entrada',
                    type: 'Agua',
                    member:'Thiago',
                    date: '16/09/1988',
                    value: 4000.00,
                    owner: 'Rosimari'
                },
                {
                    id: 'ID',
                    flowType: 'SAIDA',
                    type: 'Conta de luz',
                    date: '12/09/1988',
                    value: 400.00,
                    owner: 'Ediris'
                },
                {
                    id: 'ID',
                    flowType: 'ENTRADA',
                    type: 'Dizimo',
                    member:'Jamerson',
                    date: '15/09/1988',
                    value: 300.00,
                    owner: 'Rosimari'
                }
            ]
        }
    }