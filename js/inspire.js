define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router){
	
	var root = this;
	
	var Inspire = root.Inspire = {};
	
	var modelUrl = 'models/';
	var collectionUrl = 'collections/';
	var viewUrl = 'views/';
	
	var Router = Router;
	var Backbone = Backbone;
	
	var Models = {};
	var Collections = {};
	var Options = {
		models: [],
		collections: []
	};
		
	var init = function(options){
		
		Router = options.Router || Router;
		Backbone = options.Backbone || Backbone;
		
		Options = options;
		
		Router.init();
		
	   return this;
	}
	
	var addModel = function(modelName, model, callback){
		if(modelName){
			var name = modelName.toString().toLowerCase();
			
			if(!Models[name]){
			
				
				
				if(Models[name] != null || Models[name] != undefined)
					delete Models[name];
				
				
				if(model){
					/*
					var tmpModel = new model();
					
					if(tmpModel.relations){
						var relations = tmpModel.relations;
						
						for(var x in relations){
							var relation = relations[x];
							
							if(relation.relatedModel){
								getModel(relation.relatedModel, function(model){
									addModel(model);
								});
							}
						}
					}
					*/
					Models[name] = model;
					
					//if(Options.models.indexOf(name) == -1)
					//	Options.models.push(name);
					
					if(callback)
						callback(model);
				}
			}
		}
	}
	
	var addCollection = function(colName, collection, callback){
		if(colName){
			
			
			var name = colName.toString().toLowerCase();
			
			if(Collections[name] != null || Collections[name] != undefined)
				delete Collections[name];
			
			Collections[name] = collection;
			
			
			if(callback)
				callback(collection);
		}
	}
	
	var processModels = function(models, callback){
		
		if(models)
			Options.models = models;
			
		models = Options.models;
		
		var oldModels = Models;
		
		Models = {};
		
		if(models.length == 0){
			callback();
		}else{
			
			var counter = 0;
			
			for(var x = 0; x < (models ? models.length : 0); x++){
				var modelName = models[x];
				
				require([modelUrl + modelName.toLowerCase()], function(model){
					
					modelName = models[counter].toLowerCase();
										
					if(model){
						addModel(modelName, model);
					}
					else{
						console.log('Model "' + modelName + '" is undefined');
					}
					
					counter++;
									
					if(counter == models.length){
						if(callback)
							callback();
					}
					
						
				});
				
			}
		}
		
		
		
	}
	
	var processCollections = function(collections, callback){
		if(collections)
			Options.collections = collections;
			
		collections = Options.collections;
		
		
		Collections = {};
		
		if(collections.length == 0)
			callback();
		else{
			var counter = 0;
			
			for(var x = 0; x < (collections ? collections.length : 0); x++){
				var colName = collections[x];
				
				require([collectionUrl + colName.toLowerCase()], function(collection){
					
					colName = collections[counter].toLowerCase();
					
					if(collection)
						addCollection(colName, collection);
					else
						console.log('Collection "' + colName + '" is undefined');
						
					counter++;
					
					if(counter == collections.length){
						if(callback)
							callback();
							
					}
					
				});
			}
			
		}
		
		
	}
	
	
	var navigate = function(navTo){
		Backbone.history.navigate(navTo, { trigger: true });
	}
	
	var getModel = function(modelName, callback){
		//console.log(require);
		
		modelName = modelName.toLowerCase();
		
		require([modelUrl + modelName], function(model){
			callback(model);				
		});
	}
	
	var getCollection = function(colName, callback){
			require([collectionUrl + colName.toLowerCase()], function(col){

					callback(col);
			});
	}
	
	var getView = function(viewName, callback){
			require([viewUrl + viewName.toLowerCase()], function(view){

					callback(view);
			});
	}
		
	return {
	  init: init,
	  Router: Router,
	  Backbone: Backbone,
	  navigate: navigate,
	  getModel: getModel,
	  getCollection: getCollection
	};
});