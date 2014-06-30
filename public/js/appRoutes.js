angular.module('appRoutes', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/forms', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/newform', {
			templateUrl: 'views/newform.html',
			controller: 'FormController'
		}).
                otherwise({ redirectTo: '/forms' });
	$locationProvider.html5Mode(true);
}]);
