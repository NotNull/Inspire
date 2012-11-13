define([
  'underscore',
  'backbone',
  'collections/categories'
], function(_, Backbone, Categories){
  var Forum = Backbone.Model.extend({
    defaults: {
    	id: null,
      	title: "New Forum"
    },
    initialize : function(){
    	this.categories = new Categories;
    	this.categories.on('reset', this.updateCounts);
    }
  });
  // Return the model for the module
  return Forum;
});