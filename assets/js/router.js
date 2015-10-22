angular.module('Router', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
        	title: 			'Hello',
            templateUrl:    'index',
            controller: 	'AppController',
            controllerAs: 	'ctrl'
        })
        .when('/test', {
        	templateUrl: 	'index',
        	controller: 	'NewController',
        	controllerAs: 	'new'
        })
        .otherwise({
            redirectTo:          '/'
        });
        
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}])
.run(['$location', '$rootScope', function ($location, $rootScope) {                 // DYNAMICALLY CHANGE <head><title>
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        if (current.hasOwnProperty('$$route')) {
            $rootScope.title = current.$$route.title;
        }
    });
}])
.config([
    "$httpProvider", 
    function($httpProvider) {
        return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
]);
