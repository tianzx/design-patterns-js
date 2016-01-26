var salesOffices = {};

salesOffices.clientList = [];

salesOffices.listen = function(fn) {
	this.clientList.push(fn);
};
salesOffices.trigger = function() {
	for(var i=0,fn;fn =this.clientList[i++];){
		fn.apply(this,arguments);
	}
};
salesOffices.listen(function(price,squareMeter){
	console.log("price :"+price+","+"squareMeter :"+squareMeter);
})

salesOffices.trigger(20000,"123");
salesOffices.trigger(18000,"83");