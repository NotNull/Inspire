define([
  'jquery',
  'underscore',
  'inspire',
  'models/post'
], function($, _, Inspire, Model){
	
	var Posts = Inspire.Backbone.Collection.extend({
	  model: Model,
	  url: function() {
	  	return '/posts';
	  }
	});
	
	return Posts;
});