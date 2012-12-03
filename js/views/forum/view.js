define([
  'jquery',
  'underscore',
  'inspire',
  'handlebars',
  'text!templates/forum/view.html'
], function($, _, Inspire, Handlebars, Template){
	
	var View = Inspire.View.extend({
		events: {
			"click dt" : "categoryClicked",
			"click .title": "forumClicked"
		},
		forumClicked: function(e){
			var id = $(e.target).parent('div.forum').attr('id');
			
			if(id)
				Inspire.navigate('forums/' + id);
				

		},
		categoryClicked: function(e){
			var id = $(e.target).parent('dl.category.list').attr('id');
			
			if(id)
				Inspire.navigate('categories/' + id);

		},
		render: function(){
		   
			if(this.model){
				var js = this.model.toJSON();
				
				js.categories = this.model.categories.toJSON();
				
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