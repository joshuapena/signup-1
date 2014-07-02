angular.module('appServices', ['ngResource']).
  factory('Form', function($resource) {
    return $resource('forms/:formId', {}, {
      query: { method:'GET', params:{ formId: 'forms'}, isArray:true}
    });
  }).
  factory('Volunteer', function($resource) {
    return{
      addVolunteer: function(formId, volunteer) {
        return $resource('/volunteer/'+ String(formId) + '/' + JSON.stringify(volunteer), {}, {
          update: {method:'POST'}
        });
      }
    };
  });
