define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  'models/post'
], function($, _, Backbone, Inspire, Model){
	
	var Posts = Backbone.Collection.extend({
	  model: Model
	});
	
	return Posts;
});