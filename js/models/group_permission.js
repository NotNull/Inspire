define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var GroupPermission = Backbone.Model.extend({
    defaults: {
    	id: null,
    	group_id: null,
    	type: 'FORUM',
    	can_view: true,
    	can_edit: false,
    	can_create: false,
    	can_delete: false
    }
  });
  // Return the model for the module
  return GroupPermission;
});