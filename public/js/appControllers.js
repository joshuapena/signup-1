angular.module('appControllers', []).
  //  
  controller('HomeController', function($scope) {
  }).
  controller('FormController', function($scope) {
    $scope.form = {
      eventName: '',
      jobs: [{
        name:'',
        description:'',
      }],
      volunteers: []
    };

    $scope.addJob = function() {
      $scope.form.jobs.push({
        name:'',
        description:'',
      });
    };
    $scope.submitForm = function () {};
  });

  controller('PreviewController', function($scope) {
    $scope.addVolunteer = function() {
      $scope.form.volunteers.push();
    }
  });
