/**
 * simple 
 */
var mysinleton = {
		property1 : 'something',
		property2 : 'something else',
		method1 : function() {
			console.log("hello world");
		}
}

/***
 * 
 */
var mysinleton2 = function() {
	var privateVariable = 'something private';
	
	function showPrivate() {
		console.log(privateVariable);
	}
	return {
		publicMethod : function(){
			showPrivate();
		},
		publicVar : "this is a public variable"
	}
}

var mysinletonInstance = new mysinleton2();
mysinletonInstance.publicMethod();
console.log(mysinletonInstance.publicVar);
