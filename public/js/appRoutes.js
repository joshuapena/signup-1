angular.module('appRoutes', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		// home page
		.when('/forms', {
			templateUrl: 'views/home.html',
			controller: 'FormListController'
		})

		.when('/newform', {
			templateUrl: 'views/newform.html',
			controller: 'NewFormController'
		}).

                otherwise({ redirectTo: '/forms' });


	$locationProvider.html5Mode(true);

}]);
