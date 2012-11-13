define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  'models/topic'
], function($, _, Backbone, Inspire, Model){
	
	var Topics = Backbone.Collection.extend({
	  model: Model
	});
	
	return Topics;
});