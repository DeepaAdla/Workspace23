sap.ui.controller("sap.ui.demo.view.App", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.App
*/
	onInit: function() {
		// Test 28-08-2017 123
		// Test 07-09-2017 123
		alert("Test1");
		alert("Test2");
		alert("Test478");
		var initialView = sap.ui.xmlview("Initial","sap.ui.demo.view.Initial");
		var rootControl = this.byId("rootControl");
		rootControl.addDetailPage(initialView,true); 
		alert("Test");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.App
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.App
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.App
*/
//	onExit: function() {
//
//	}

});
