function A(name,age) {
	this.name = name;
	this.age = age;
}
A.prototype.getA =function(){
	console.log(this.name+"： "+this.age);
}

function B(extraInfo) {
	this.name = "test2";
	this.extraInfo =extraInfo;
}
B.prototype = new A("tianzx","20");

var b = new B("帥！！！！！！！！");
console.log(B.prototype);
