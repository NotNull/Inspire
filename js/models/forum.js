define([
  'exports',
  'underscore',
  'inspire',
  'collections/categories'
], function(exports, _, Inspire, Categories){

  var Forum = Inspire.Backbone.Model.extend({
  	idAttribute: 'id',
    defaults: {
    	id: null,
      	title: "New Forum"
    },
    initialize: function(){
    	this.categories = new Categories;
    },
    urlRoot: 'forum/'
  });
  // Return the model for the module
  
  exports.Forum = Forum;
  
  return Forum;
});