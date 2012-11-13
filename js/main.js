require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    handlebars: 'libs/handlebars/handlebars',
    inspire: 'inspire',
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
  	inspire: {
  		deps: ["underscore", "jquery", "backbone", "handlebars"],
  		exports: "Inspire"
  	}
  }

});

define([
	'router',
  	'inspire',
], function(Router, Inspire){
    
    Inspire.init({
    	Router: Router
    });
    
    console.log('Inspire initalized');
    
    
});