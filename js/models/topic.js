define([
  'exports',
  'underscore',
  'mastermodel',
  'inspire',
  'collections/posts',
  'models/category'
], function(exports, _, MasterModel, Inspire, Posts, Category){
	
  var Topic = MasterModel.extend({
  	idAttribute: 'id',
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
    	
    	this.category = new Category;
    },
    urlRoot: '/topic'
  });
  
  exports.Topic = Topic;
  
  // Return the model for the module
  return Topic;
});