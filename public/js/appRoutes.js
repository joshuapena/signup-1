angular.module('appRoutes', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/newform', {
			templateUrl: 'views/newform.html',
			controller: 'FormController'
		})

	$locationProvider.html5Mode(true);

}]);
