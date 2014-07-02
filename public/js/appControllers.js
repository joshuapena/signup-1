angular.module('appControllers', ['appServices']).
  // Search for Forms
  controller('FormListController', function($scope, Form) {
    $scope.forms = Form.query();
  }).
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
      if(form.jobs.length > 1){
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
      // Attach job name for display
      $scope.volunteer.job = jobName

      // Post to DB
      // Params: FormID for accessing database
      //         volunteer: Obj, transferred in JSON format to express through URL
      //         see ./appServices.js
      Volunteer.addVolunteer($routeParams.formId, $scope.volunteer).update();
      $scope.form = Form.get({formId: $routeParams.formId});
      $scope.volunteer = {};
    };
});
      
      
