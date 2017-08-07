/**
 * 
 */
jQuery.sap.declare("sap.ui.demo.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.Component", {
    metadata:{
    	rootView: "sap.ui.demo.view.App",
    	routing:{
    		config:{
    			routerClass: sap.ui.core.routing.Router,
    			viewType:"XML",
    			targetAggregation:"detailPages",
    			clearTarget:false,
    		},
    		routes:[{
    			pattern:"",
    			name: "MasterPage",
    			view: "sap.ui.demo.view.Master",
    			viewType:"XML",
    			targetAggregation:"masterPages",
    			targetControl:"rootControl", 
    			   subroutes:[{
    	    			pattern:"MasterPage",
    	    			name: "DetailPage",
    	    			view: "sap.ui.demo.view.Detail",
    	    			viewType:"XML",
    	    			targetAggregation:"detailPages",  
    			   }]
    	}]}
    },  
    init: function() {
    	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
    	
    	sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
    	var router = this.getRouter();
    	this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
    	router.register("appRouter");
    	router.initialize();
    	
    },
	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.view.App",
			type : "XML",
			viewData : { component : this }
		});

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		//var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		//oView.setModel(oModel);

		// done
		return oView;
	}
});