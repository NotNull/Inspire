define([
  'jquery',
  'underscore',
  'backbone',
  'inspire'
  //'views/projects/list',
], function($, _, Backbone, Inspire){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes

      'categories/:id': 'getCategories',
      'topics/:id': 'getTopics',
      'forums': 'getForums',
      'forums/': 'getForums',
      'forums/:id': 'getForums',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var init = function(){
  	
    var app_router = new AppRouter;
      // As above, call render on our loaded module
      // 'views/users/list'
      
    app_router.on('route:getForums', function(id){
    	
    	$('#container').empty();
    	
    	var view = null;
    	
    	if(id){
	    	view = new ForumView({
	    		model: new ForumModel({
	    			id: id,
	    			title: 'Title of Forum'
	    		}),
	    		appendTo: $('#container')
	    		
	    	});
    	}
    	else{
    		
    		Inspire.getCollection('forums', function(forums){
	    		new forums([
		    			{id: 1, title: 'Forum1'},
		    			{id: 2, title: 'Forum2'}
	    		]);
	    		
	    		view = new 	ForumList({
	    			collection: forums,
	    			appendTo: $('#container')
	    		});
	    		
	    		view.render();
    			
    		});
    		
    	}
    	
    });
    
    app_router.on('route:getCategories', function(id){
    	
    	$('#container').empty();
    	
    	var list = new CategoryView({
    		model: new CategoryModel({
    			id: id,
    			title: 'Title of Category'
    		}),
    		appendTo: $('#container')
    		
    	});
    	
    	list.render();
    });
    
    app_router.on('route:getTopics', function(id){
    	
    	$('#container').empty();
    	
    	var list = new TopicView({
    		model: new TopicModel({
    			id: id,
    			title: 'Title of Topic'
    		}),
    		appendTo: $('#container')
    		
    	});
    	
    	list.render();
    });
    
    app_router.on('route:defaultAction', function(actions){
    	//Inspire.getModel('post');
    	
    	console.log('Unknown Action');
    });
    
    Backbone.history.start();
    
    return this;
  };
  return {
    init: init
  };
});