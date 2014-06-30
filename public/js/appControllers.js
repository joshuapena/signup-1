angular.module('appControllers', []).
  //  
  controller('FormListController', function($scope) {
    $scope.forms = Form.query();
  }).
  controller('NewFormController', function($scope, Form) {
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
  }).
  controller('FormViewController', function($scope, Form) {
    $scope.form = Form.get({formId: $routeParams.formId});
    $scope.signup = function() {};
  });



