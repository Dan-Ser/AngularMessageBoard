var myApp = angular.module('myApp', ['ngRoute']);
    	
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/landing_page.html'
        })
        .when('/edit/:id', {
        	templateUrl: 'partials/profile.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});