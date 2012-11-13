define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  'handlebars',
  // Pull in the Collection module from above
  'models/forum',
  'text!templates/forum/view.html'
], function($, _, Backbone, Inspire, Handlebars, Forum, projectViewTemplate){
	
	
  var ForumView = Inspire.View.extend({
    el: $("#container"),
    render: function(){
    	
	  Forum.categories.fetch();
      
      // Compile the template using Underscores micro-templating
      var compiledTemplate = Handlebars.compile(projectViewTemplate);
      
      this.$el.html(compiledTemplate(Forum.categories.models));
      
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return ForumView;
});