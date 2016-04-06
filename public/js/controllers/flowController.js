angular
    .module('iade')
    .controller('FlowController', FlowController)
    
    FlowController.$inject = ['flowBuilderService', 'userFactory']
    
function FlowController(flowBuilderService, userFactory){
    var vm = this;
    vm.flowTypes = [ { id: 'in', name: 'Entrada' } , { id: 'out',name: 'Saida'} ]
    vm.types = flowBuilderService.getTypes();
    vm.latestFlows = flowBuilderService.getLatestFlows();
    vm.users = userFactory.findUserByName()
}