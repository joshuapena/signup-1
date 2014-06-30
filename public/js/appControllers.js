angular.module('appControllers', []).
  //  
  controller('AddjobController', function($scope, JobData) {
    $scope.jobs = JobData;

    $scope.newJob = {};

    $scope.addJob = function() {
      var job = $scope.newJob;
      $scope.jobs.push(job);

      $scope.newJob = {};
    };
  }).
  controller('PreviewController', function($scope) {
    $scope.volunteers = [];
    $scope.newVolunteer = {};

    $scope.addVolunteer= function(job) {
      $scope.newVolunteer.job = job;
      $scope.volunteers.push($scope.newVolunteer);

      $scope.newVolunteer = {};
    };
  }).
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



