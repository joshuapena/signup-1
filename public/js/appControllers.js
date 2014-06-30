angular.module('appControllers', ['appServices']).
  controller('HomeController', function($scope, Form) {
  }).
  controller('FormListController', function($scope, Form) {
    $scope.forms = Form.query();
  }).
  controller('FormController', function($scope, Form) {
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
            alert('Could not create for');
          }
        });
      }
    };
  }).
  controller('FormController', function($routeParams, $scope, Form) {
    $scope.form = Form.get({formId: $routeParams.formId});
    $scope.signup = function() {};
  });
