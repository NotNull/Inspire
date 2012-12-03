define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var MasterView = Backbone.View.extend({
    el: $("#container"),
    appendTo: null,
    initialize: function(){
    	this.appendTo = this.options.appendTo || null;
    },
    renderTo: function(object){
    	object = object || this.appendTo;
    	
    	if(object){
    		if(this.el)
    			$(object).append(this.el);
    		else{
    			this.render().renderTo();
    		}
    	}
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return MasterView;
});