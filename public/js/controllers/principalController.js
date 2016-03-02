angular
    .module('iade')
    .controller('PrincipalController', PrincipalController)

function PrincipalController(){
    console.log('carreguei')
    var vm = this;
    vm.teste = "ah"
}