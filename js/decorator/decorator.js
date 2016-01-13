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
}

function Ram(Macbook) {
	this.cost = function() {
		return Macbook.cost() + 50;
	}
}

var price = new Ram(new MacBook("my")).cost();
console.log(price);