var Chain = function() {
	this.processorList = [];
	this.processorList.push('processor1');
	this.processorList.push('processor2');
	this.processorList.push('processor3');
}
Chain.prototype.process = function(id) {
	for(var i=0;i<this.processorList.length;i++){
		if(eval(this.processorList[i]+"("+"id"+")")=='nextProcessor') {
			console.log("need next processor ");
		}else{
			break;
		}
	}
}
/**
 * 
 * @param {0-99} id
 */
var processor1 = function(id) {
	if(id>100 ||id<0) {
		return "nextProcessor";
	}else {
		console.log(id);
		return "success"
	}
}
/**
 * 
 * @param {100-199} id
 */
var processor2 = function(id) {
	if(id>199 ||id<100) {
		return "nextProcessor";
	}else {
		console.log(id);
		return "success"
	}
}
/**
 * 
 * @param {200-299} id
 */
var processor3 = function(id) {
	if(id>299 ||id<200) {
		return "nextProcessor";
	}else {
		console.log(id);
		return "success"
	}
}


var chain = new Chain();
chain.process("199");