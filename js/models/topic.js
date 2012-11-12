define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Topic = Backbone.Model.extend({
    defaults: {
    	id: null,
    	category_id: null,
      	title: "New Topic",
      	is_active: true,
      	is_stickied: false,
      	is_locked: false,
      	created_at: new Date(),
      	updated_at: new Date(),
      	
    }
  });
  // Return the model for the module
  return Topic;
});