define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Forum = Backbone.Model.extend({
    defaults: {
    	id: null,
      	title: "New Forum"
    }
  });
  // Return the model for the module
  return Forum;
});