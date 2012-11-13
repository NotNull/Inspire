define([
  'underscore',
  'backbone',
  'posts'
], function(_, Backbone, Posts){
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
      	
    },
    initialize: function(){
    	this.posts = new Posts;
    	this.posts.on('reset', this.updateCount);
    }
  });
  // Return the model for the module
  return Topic;
});