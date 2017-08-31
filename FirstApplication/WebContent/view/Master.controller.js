jQuery.sap.require("sap.ui.core.routing.Router");
sap.ui.controller("sap.ui.demo.view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Master
*/
	onInit: function() {
           //Test Version1 
	   //Test Version1 
           alert("Hello");
	   alert("test1");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Master
*/
//	onExit: function() {
//
//	}
   handlePress : function () {
	   router = sap.ui.core.routing.Router.getRouter("appRouter");
	   router.navTo("DetailPage");
   },
   handlePress1 : function () {
	   //Test1.123
	   alert("Test23");
	   router = sap.ui.core.routing.Router.getRouter("appRouter");
	   router.navTo("DetailPage");
}
});
