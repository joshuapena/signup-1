angular.module('appRoutes', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
<<<<<<< HEAD

		// home page
		.when('/', {
=======
		.when('/forms', {
>>>>>>> upstream/master
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/newform', {
			templateUrl: 'views/newform.html',
<<<<<<< HEAD
			controller: 'FormController'
		})

		.when('/forms/:formId', {
			templateUrl: 'views/showform.html',
			controller: 'PreviewController'
		})

=======
			controller: 'NewFormController'
		}).
                otherwise({ redirectTo: '/forms' });
>>>>>>> upstream/master
	$locationProvider.html5Mode(true);
}]);
