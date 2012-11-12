define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var User = Backbone.Model.extend({
    defaults: {
    	id: null,
		username: '',
		password: ''
    }
  });
  // Return the model for the module
  return User;
});