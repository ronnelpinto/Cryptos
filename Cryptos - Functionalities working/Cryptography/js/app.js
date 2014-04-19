'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', 
  	function($routeProvider) 
  	{
    $routeProvider.when('/aes', {template: 'partials/aes.php?', controller: AESCtrl});
    $routeProvider.when('/des', {template: 'partials/des.php?', controller: DESCtrl});
    $routeProvider.when('/about', {template: 'partials/about.html', controller: homeCtrl});
    $routeProvider.when('/phrases', {template: 'partials/phrases.html?', controller: phrasesCtrl});
    $routeProvider.when('/signin', {template: 'Backend/signin.html'});
    $routeProvider.when('/getkey', {template: 'Backend/getkey.php?'});
	$routeProvider.otherwise({redirectTo: 'signin'});
  	}]);



