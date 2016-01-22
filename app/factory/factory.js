var productManager = {};

productManager.createProductA = function() {
	console.log("product a is created")
}

productManager.createProductB = function() {
	console.log("product b is created");
}

productManager.factory = function(type) {
	return new productManager[type];
}
productManager.factory('createProductB');

var object = {
		'0' :1,
		'1':2
};
console.log(object['0']);
