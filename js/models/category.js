define([
  'underscore',
  'backbone',
  'collections/topics'
], function(_, Backbone, Topics){
  var Category = Backbone.Model.extend({
    defaults: {
    	id: null,
    	forum_id: null,
      	title: "New Category"
    },
    initialize: function(){
    	this.topics = new Topics;
    	this.topics.on('reset', this.updateCount);
    }
  });
  // Return the model for the module
  return Category;
});