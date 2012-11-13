define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  'models/forum'
], function($, _, Backbone, Inspire, Model){
	
	var Forums = Backbone.Collection.extend({
	  model: Model
	});
	
	return Forums;
});