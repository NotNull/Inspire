define([
  'jquery',
  'underscore',
  'inspire',
  'handlebars',
  'text!templates/post/view.html'
], function($, _, Inspire, Handlebars, Template){
	
	var PostView = Inspire.View.extend({
		render: function(){
		   
			if(this.model){
				var js = this.model.toJSON();
				     
				var compiledTemplate = Handlebars.compile(Template);
					      
				this.el = compiledTemplate(js);
			}
				     
			return this;  
		}
	});
	  // Returning instantiated views can be quite useful for having "state"
	return PostView;
});