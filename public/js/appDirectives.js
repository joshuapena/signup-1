angular.module('appDirectives', [])
  .directive('jobInfo', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/partials/displayJobs.html'
    };
  });
