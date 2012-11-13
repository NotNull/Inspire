define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  'models/user'
], function($, _, Backbone, Inspire, Model){
	
	var Users = Backbone.Collection.extend({
	  model: Model
	});
	
	return Users;
});