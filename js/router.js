define([
  'jquery',
  'underscore',
  'backbone',
  'views/users/list'
  //'views/projects/list',
], function($, _, Backbone, UserListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'users': 'showUsers',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var init = function(){
    console.log('Router was initalized');
	
    var app_router = new AppRouter;
      // As above, call render on our loaded module
      // 'views/users/list'
    app_router.on('route:showUsers', function(){
      var userListView = new UserListView();
      userListView.render();
      
    });
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
    
    return this;
  };
  return {
    init: init
  };
});