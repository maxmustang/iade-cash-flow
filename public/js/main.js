angular
    .module('iade', [ 
        'ngRoute', 
        'iade.directives',
        'iade.flow.factory'
    ])
    .config(Config)
    
Config.$inject = ['$routeProvider', '$locationProvider']

function Config($routeProvider, $locationProvider){
    console.log('configurando rotaas')        
    $locationProvider.html5Mode(true);

    $routeProvider.when('/flow', {
        templateUrl:'partials/flow.html',
        controller: 'FlowController'
    })
    $routeProvider.when('/', {
        templateUrl: 'partials/index.html',
        controller: 'PrincipalController'
    })
    $routeProvider.otherwise({redirectTo: '/'})
}