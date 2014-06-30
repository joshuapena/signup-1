angular.module('appServices', ['ngResource']).
  factory('Form', function($resource) {
    return $resource('forms/:formId', {}, {
      query: { method:'GET', params:{ formId: 'forms'}, isArray:true}
    });
  });
    
