define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var UserAttribute = Backbone.Model.extend({
    defaults: {
    	id: null,
		user_id: null
    }
  });
  // Return the model for the module
  return UserAttribute;
});