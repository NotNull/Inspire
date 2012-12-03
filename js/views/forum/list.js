define([
  'jquery',
  'underscore',
  'inspire',
  'handlebars',
  'collections/forums',
  'views/forum/view'
], function($, _, Inspire, Handlebars, Collection, View){
	
	var ListView = Inspire.View.extend({
		  initialize : function() {
		    var root = this;
		    this._childViews = [];
		 
		    this.collection.each(function(model) {
		      root._childViews.push(new View({
		        model : model
		      }));
		    });
		  },
		 
		  render : function() {
		    var root = this;
		    // Clear out this element.
		    $(this.el).empty();
		 
		    // Render each sub-view and append it to the parent view's element.
		    _(this._childViews).each(function(dv) {
		      $(root.el).append(dv.render().el);
		    });
		    
		    
			if(this.appendTo){
				$(this.appendTo).append(this.el);
			}
		  }
	});
	  // Returning instantiated views can be quite useful for having "state"
	return ListView;
});