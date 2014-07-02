angular.module('appControllers', ['appServices']).
  // For /forms
  controller('FormListController', function($scope, Form) {
    $scope.forms = Form.query();
  }).

  // For /newform
  controller('NewFormController', function($scope, $location, Form) {
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
    $scope.createForm = function () {
      var form = $scope.form;
      if(form.jobs[0].name!=''){
        var newForm = new Form(form);
        newForm.$save(function(p, resp) {
          if(!p.error) {
            $location.path('forms');
          }else{
            alert('Could not create form');
          }
        });
      } else {
        alert("Please add a job.");
      };
    }
  }).
  controller('FormController', function($routeParams, $scope, Form, Volunteer) {
    $scope.form = Form.get({formId: $routeParams.formId});
    $scope.volunteer = {};

    $scope.signup = function(jobName) {
      var correctIndex;
      for (var i = 0; i < $scope.form.jobList.length; i++) {
        if ($scope.form.jobList[i].name == jobName) {
          correctIndex = i;
          break
        }
      }
      $scope.form.jobList[correctIndex].volunteer.job = jobName;
      $scope.volunteer = $scope.form.jobList[correctIndex].volunteer;
      Volunteer.addVolunteer($routeParams.formId, $scope.volunteer).update();
      $scope.form = Form.get({formId: $routeParams.formId});
      $scope.volunteer = {};
    };
  });
