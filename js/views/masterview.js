define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var MasterView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
    	console.log('Master View initalized!');
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return MasterView;
});