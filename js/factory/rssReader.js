//var DisplayModule = new Interface('DisplayModule',['append','remove','clear'])

var ListDisplay = function(id,parent) {
	this.list = document.createElement('ul');
	console.log(this.list);
	this.list.id = id;
	parent.appendChild(this.list);
}
ListDisplay.prototype={
	append : function(text) {
		var el = document.createElement('li');
		this.list.appendChild(el);
		el.innerHTML = text;
		return el;
	},
	remove : function(el) {
		this.list.removeChild(el);
	},
	clear : function(){
		this.list.innerHTML=""
	}
}
