require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore',
    exports: 'exports',
    backbone: 'libs/backbone/backbone',
    backbonerelation: 'libs/backbone/backbone-relational',
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
  	backbonerelation:{
  		deps: ["backbone", "underscore", "exports"],
  		exports: "BackboneRelation"
  	},
  	mastermodel: {
  		deps: ["backbonerelation"],
  		exports: "MasterModel"
  	},
  	handlebars: {
  		exports: "Handlebars"
  	},
  	inspire: {
  		deps: ["underscore", "jquery", "backbone", "handlebars"],
  		exports: "Inspire"
  	}
  }

});

define([
	'router',
  	'inspire'
], function(Router, Inspire){
    
    Inspire.init({
    	Router: Router
    });
    
    
});