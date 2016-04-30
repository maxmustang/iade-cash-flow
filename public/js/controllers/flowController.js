"use strict"
angular
    .module('iade')
    .controller('FlowController', FlowController)
    
    FlowController.$inject = ['flowBuilderService', 'memberFactory']
    
function FlowController(flowBuilderService, memberFactory){
    var vm = this;
    vm.flowTypes = [ { id: 'in', name: 'Entrada' } , { id: 'out',name: 'Saida'} ]
    vm.types = flowBuilderService.getTypes();
    vm.latestFlows = flowBuilderService.getLatestFlows();
    vm.users = memberFactory.findByMemberName()
    
    
    vm.saveCashFlow = saveCashFlow
    
    vm.editCashFlow = editCashFlow
    
     
    function editCashFlow(id){
       vm.cashFlow = vm.flowTypes.filter(function(f) {
           f.id === id
       })
        
    }
    
    function saveCashFlow(){
        console.log(vm.cashFlow)
        vm.latestFlows.push(vm.CashFlow)
        vm.cashFlow = {}
    }
    
    
}