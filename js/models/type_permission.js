define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var TypePermission = Backbone.Model.extend({
    defaults: {
    	id: null,
    	type: 'FORUM',
    	type_id: null,
    	group_id: null,
    	can_view: true,
    	can_edit: false,
    	can_delete: false
    }
  });
  // Return the model for the module
  return TypePermission;
});