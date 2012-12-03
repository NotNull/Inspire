define([
  'exports',
  'underscore',
  'mastermodel',
  'inspire',
  'models/user',
  'models/topic'
], function(exports, _, MasterModel, Inspire, User, Topic){
	
	var Backbone = Inspire.Backbone;
	
  var Post = MasterModel.extend({
  	idAttribute: 'id',
    defaults: {
    	id: null,
    	topic_id: null,
    	user_id: null,
      	title: "New Post",
      	body: '',
      	topic: null,
      	created_at: new Date(),
      	updated_at: new Date(),
      	user: null
    },
    initialize: function(){
    		this.user = new User;
    },
    urlRoot: '/post'
  });
  
  exports.Post = Post;
  
  // Return the model for the module
  return Post;
});