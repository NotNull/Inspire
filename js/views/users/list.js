define([
  'jquery',
  'underscore',
  'backbone',
  'inspire',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/user/list.html'
], function($, _, Backbone, Inspire, userListTemplate){
	
  var UserListView = Inspire.View.extend({
    el: $("#container"),
    render: function(){
      console.log('Users was rendered');
      // Compile the template using Underscores micro-templating
      this.$el.html('Hello World!');
      
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return UserListView;
});