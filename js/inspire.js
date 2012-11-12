define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
  'masterview',
  'mastermodel'
], function($, _, Backbone, Router, View, Model){
	
	var root = this;
	
	var Inspire = root.Inspire = {};
	
	var Collection;
		
	var init = function(options){
		
		Router = options.Router || Router;
		View = options.MasterView || View;
		Model = options.MasterModel || Model;
		Backbone = options.Backbone || Backbone;
		Collection = options.Collection || Backbone.Collection.extend({});
		
		Router.init();
		
	   return this;
	};
		
	return {
	  init: init,
	  View: View,
	  Collection: Collection,
	  Model: Model,
	  Router: Router,
	  Backbone: Backbone
	};
});