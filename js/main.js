require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    handlebars: 'libs/handlebars/handlebars',
    bforum: 'bforum',
    masterview: 'views/masterview',
    mastermodel: 'models/mastermodel',
    templates: '../templates'
  },
  shim: {
  	underscore: {
  		exports: '_'
  	},
  	backbone: {
  		deps: ["underscore", "jquery"],
  		exports: "Backbone"
  	},
  	bforum: {
  		deps: ["underscore", "jquery", "backbone", "handlebars"],
  		exports: "BForum"
  	}
  }

});

define([
  'router', // Request router.js
  'bforum',
], function(Router, BForum){
    
    BForum.init({
    	Router: Router
    });
    
    console.log('BForum initalized');
    
    
});