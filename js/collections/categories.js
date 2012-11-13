define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  'models/category'
], function($, _, Backbone, Inspire, Model){
	
	var Categories = Backbone.Collection.extend({
	  model: Model
	});
	
	return Categories;
});