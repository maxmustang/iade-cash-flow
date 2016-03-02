angular
    .module('iade.directives', [])
    .directive('menuPrincipal', menuPrincipal)
    .directive('container', container)
    .directive('menuLateral', menuLateral)
    .directive('deleteButton', deleteButton)
    .directive('addButton', addButton)
    .directive('editButton', editButton)
    
    function addButton(){
        var ddo = {}
        ddo.restrict = "E"
        ddo.template = '<button class="btn btn-primary">Adicionar</button>';
        return ddo;
    }
    
    function editButton(){
        var ddo = {}
        ddo.restrict = "E"
        ddo.template = '<button class="btn btn-default">Editar</button>';
        return ddo;
    }
    
    function deleteButton(){
        var ddo = {}
        ddo.restrict = "E"
        ddo.template = '<button class="btn btn-danger">Remover</button>';
        return ddo;
    }
    
    function menuPrincipal(){
        var ddo = {}
        ddo.restrict = "E"
        ddo.templateUrl = 'js/directives/html/menuPrincipal.html';        
        return ddo
    }
    
    function container(){
        var ddo = {}
        ddo.restrict = 'E';
        ddo.transclude = true; 
        ddo.templateUrl = 'js/directives/html/container.html'
        return ddo
    }
    
    function menuLateral(){
        var ddo = {}
        ddo.restrict = 'E'
        ddo.templateUrl = 'js/directives/html/menuLateral.html'
        return ddo
    }