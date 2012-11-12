define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Post = Backbone.Model.extend({
    defaults: {
    	id: null,
    	topic_id: null,
    	user_id: null,
      	title: "New Post",
      	created_at: new Date(),
      	updated_at: new Date()
    }
  });
  // Return the model for the module
  return Post;
});