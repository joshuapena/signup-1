angular.module('appRoutes', []).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/forms', {
			templateUrl: 'views/home.html',
			controller: 'FormListController'
		})
		.when('/newform', {
			templateUrl: 'views/newform.html',
			controller: 'NewFormController'
		})
                .when('/form/:formId', {
                        templateUrl: 'views/home.html',
                        controller: 'FormController'
                }).
                otherwise({ redirectTo: '/forms' });
}]);
