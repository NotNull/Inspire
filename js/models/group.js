define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Category = Backbone.Model.extend({
    defaults: {
    	id: null,
    	forum_id: null,
      	title: "New Category"
    }
  });
  // Return the model for the module
  return Category;
});