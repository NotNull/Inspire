define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  // Pull in the Collection module from above
  'collections/projects',
  'text!templates/project/list.html'
], function($, _, Backbone, Inspire, ProjectsCollection, projectsListTemplate){
	
	
  var ProjectListView = Inspire.View.extend({
    el: $("#container"),
    render: function(){
      console.log('Projects was rendered');
      this.collection = new ProjectsCollection();
      this.collection.add({ name: "Ginger Kid"});
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( projectsListTemplate, { projects: this.collection.models } );
      this.$el.html(compiledTemplate);
      
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});