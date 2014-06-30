<<<<<<< HEAD
angular.module('appControllers', []).
  //  
  controller('HomeController', function($scope) {
=======
angular.module('appControllers', ['appServices']).
  controller('FormListController', function($scope, Form) {
    $scope.forms = Form.query();
>>>>>>> upstream/master
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
<<<<<<< HEAD
  controller('PreviewController', function($scope) {
    $scope.addVolunteer = function() {
      $scope.form.volunteers.push();
    }
=======
  controller('FormViewController', function($routeParams, $scope, Form) {
    $scope.form = Form.get({formId: $routeParams.formId});
    $scope.signup = function() {};
>>>>>>> upstream/master
  });
