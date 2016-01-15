var NO_TOPIC = -1;
var Topic;
var Handler = function(successor,topic) {
	this.successor = successor;
	this.topic = topic || 0;
}

Handler.prototype = {
	handle :function() {
		if(this.successor) {
			this.successor.handle();
		}
	},
	has : function() {
		return this.topic != NO_TOPIC;
	}
}
var app = new Handler({
	handle:function(){
		console.log("app handle the request...");
	}
},3);

var dialog = new Handler(app,2);
var button = new Handler(dialog,1);
button.handle();


var app = new Handler({
    handle: function () {
        console.log('app handle');
    }
}, 3);

var dialog = new Handler(app, 1);

dialog.handle = function () {
    // 这里做具体的处理操作
    console.log('dialog handle');
    Handler.prototype.handle.call(this); //继续往上走
};

var button = new Handler(dialog, 2);

button.handle = function () {
    // 这里做具体的处理操作
    console.log('button handle');
    console.log(this);
    Handler.prototype.handle.call(this);
};

button.handle();