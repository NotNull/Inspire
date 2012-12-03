define([
  'jquery',
  'underscore',
  'inspire',
  'handlebars',
  'text!templates/category/view.html'
], function($, _, Inspire, Handlebars, Template){
	
	var View = Inspire.View.extend({
		events: {
			"click dt" : "clicked"
		},
		clicked: function(e){
			var topicId = $(e.target).parent('dl.topic.list').attr('id');
			
			if(topicId)
				Inspire.navigate('topics/' + topicId);

		},
		render: function(){
		   
			if(this.model){
				var js = this.model.toJSON();
				
				js.topics = this.model.topics.toJSON();
				     
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