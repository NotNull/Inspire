define([
  'jquery',
  'underscore',
  'inspire',
  'models/topic'
], function($, _, Inspire, Model){
	var Topics = Inspire.Backbone.Collection.extend({
	  model: Model,
	  url: function() {
	  	return '/topics';
	  }
	});
	
	return Topics;
});