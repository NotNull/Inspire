define([
  'exports',
  'underscore',
  'inspire',
  'mastermodel'
], function(exports, _, Inspire, MasterModel){
  var User = MasterModel.extend({
  	idAttribute: 'id',
    defaults: {
    	id: null,
		username: '',
		password: ''
    },
    relations:[
    	{
    		type: Backbone.HasMany,
    		key: 'posts',
    		relatedModel: 'Post',
	        reverseRelation: {
	            key: 'post',
	            includeInJSON: 'id',
	        }
    	}
    ],
    urlRoot: '/user'
  });
  
  exports.User = User;
  
  // Return the model for the module
  return User;
});