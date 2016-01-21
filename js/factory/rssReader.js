//var DisplayModule = new Interface('DisplayModule',['append','remove','clear'])
//
//var ListDisplay = function(id,parent) {
//	this.list = document.createElement('ul');
//	console.log(this.list);
//	this.list.id = id;
//	parent.appendChild(this.list);
//}
//ListDisplay.prototype={
//	append : function(text) {
//		var el = document.createElement('li');
//		this.list.appendChild(el);
//		el.innerHTML = text;
//		return el;
//	},
//	remove : function(el) {
//		this.list.removeChild(el);
//	},
//	clear : function(){
//		this.list.innerHTML=""
//	}
//}
var FeedReader = function(display, xhrHandler, conf) {
	this.display = display;
	this.xhrHandler = xhrHandler;
	this.conf = conf;
	this.startUpdates();
}
FeedReader.prototype = {
	fetchFeed: function() {
		var that = this;
		var callback = {
			success: function(text, xml) {
				that.parseFeed(text, xml);
			},
			failure: function(status) {
				that.showError(status);
			}
		};
		console.log(this.conf);
		//		console.log(this.conf.feedUrl);
		var xml = this.xhrHandler.request('GET', this.conf.feedUrl, callback);
		console.log(xml);
	},
	parseFeed: function(responseText, responseXml) {

	},
	showError: function(statusCode) {

	},
	stopUpdates: function() {

	},
	startUpdates: function() {

	}
}
var FeedManager = {
	createFeedReader: function(conf) {
		
		return new FeedReader(displayModule, xhrHandler, conf);
	}
};