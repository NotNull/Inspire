define([
  'jquery',
  'underscore',
  'inspire',
  'handlebars',
  'text!templates/topic/view.html'
], function($, _, Inspire, Handlebars, Template){
	
	var View = Inspire.View.extend({
		render: function(){
		   
			if(this.model){
				var js = this.model.toJSON();
				
				js.posts = this.model.posts.toJSON();
				
				var compiledTemplate = Handlebars.compile(Template);
					      
				this.el = compiledTemplate(js);
				
				if(this.appendTo){
					$(this.appendTo).append(this.el);
				}
			}
				     
			return this;  
		}
	});
	  // Returning instantiated views can be quite useful for having "state"
	return View;
});