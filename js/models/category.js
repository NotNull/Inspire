define([
  'exports',
  'underscore',
  'inspire',
  'mastermodel',
  'collections/topics',
  'models/forum'
], function(exports, _, Inspire, MasterModel, Topics, Forum){
	
  var Category = MasterModel.extend({
  	idAttribute: 'id',
    defaults: {
    	id: null,
    	forum_id: null,
      	title: "New Category"
    },
    initialize: function(){
    	this.topics = new Topics;
    	
    	this.forum = new Forum;
    }, 
    urlRoot: 'category/'
  });
  // Return the model for the module
  
  exports.Category = Category;
  
  return Category;
});