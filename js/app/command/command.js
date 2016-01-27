var Invoker = function() {
	var commands = [];
	this.storeAndExecute = function(command) {
		commands.push(command);
		command.execute();
	}
}

var Receiver = function() {
	this.command1 = function(){console.log("1")};
	this.command2 = function(){console.log("2")};
}

var Command1 = function(receiver){
	this.execute = receiver.command1;
}
var Command2 = function(receiver){
	this.execute = receiver.command2;
}

var receiver = new Receiver();
var command1 = new Command1(receiver);
var command2 = new Command2(receiver);
var invoker = new Invoker();
invoker.storeAndExecute(command1);
invoker.storeAndExecute(command2);

