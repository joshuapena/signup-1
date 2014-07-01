angular.module('appRoutes', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/forms', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.when('/newform', {
			templateUrl: 'views/newform.html',
<<<<<<< HEAD
			controller: 'FormController'
		}).
=======
			controller: 'NewFormController'
		})
                .when('/form/:formId', {
                        templateUrl: 'views/form.html',
                        controller: 'FormController'
                }).
>>>>>>> upstream/master
                otherwise({ redirectTo: '/forms' });
}]);
