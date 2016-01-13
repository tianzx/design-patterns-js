var MyCons = function(name,sex,age) {
	
	/**
	 * forced to use new
	 */
	if(!(this instanceof MyCons)) {
		return new MyCons(name,sex,age);
	}
	this.name = name;
	this.sex = sex;
	this.age = age;
	this.getInfo = function() {
		console.log("name:" + name + " sex:" +sex + " age:" +age);
	}
}

var myConstuctor = new MyCons('tiazx','male','20');
myConstuctor.getInfo();


var myConstuctor2 =  MyCons('tiazx2','female','22');
myConstuctor2.getInfo();


