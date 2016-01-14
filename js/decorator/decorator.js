/**
 * decorated
 * @param name
 * @returns
 */
function MacBook(name) {
	this.name = name;
	this.cost = function() {
		return 1000;
	}
	console.log(this.cost());
}

function Ram(Macbook) {
	this.cost = function() {
		return Macbook.cost() + 50;
	}
	console.log(this.cost());
}

function Mounse(Macbook) {
	this.cost = function() {
		return Macbook.cost() + 10;
	}
	console.log(this.cost());
}
//var price = new Mounse(new Ram(new MacBook("my"))).cost();
//console.log(price);
var price = new Ram(new Mounse(new MacBook()));