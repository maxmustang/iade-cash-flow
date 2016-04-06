angular
    .module('iade', [ 
        'ngRoute',
        'iade.flow.factory', 
        'iade.directives'
        
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