define([
  'jquery',
  'underscore',
  'inspire',
  'models/forum'
], function($, _, Inspire, Model){
	
	var Forums = Inspire.Backbone.Collection.extend({
	  model: Model,
	  url: function() {
	  	return '/forums';
	  }
	});
	
	return Forums;
});