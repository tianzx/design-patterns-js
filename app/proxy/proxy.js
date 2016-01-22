var Person = function() {
	this.proxyticket = new Proxyticket();
}
Person.prototype.buyTicket = function() {
	this.proxyticket.sellTicket();
}
var Proxyticket = function() {
	this.station = new Station();
}
Proxyticket.prototype.sellTicket = function(){
	this.station.sellTicket();
}

var Station = function(){
}
Station.prototype.sellTicket = function(){
	console.log("成功买票。。。");
}
var person = new Person();
person.buyTicket();