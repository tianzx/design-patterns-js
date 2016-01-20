var car =  {
	drive : function() {
		console.log("running on the road ...");
	},
	name : 'qq'
}

var mycar =  Object.create(car);
mycar.name='Rolls';

console.log(mycar);
mycar.drive();

var vehiclePrototype = {
	    init: function (carModel) {
	        this.model = carModel;
	    },
	    getModel: function () {
	        console.log('车辆模具是：' + this.model);
	    }
};

	function vehicle(model) {

	    function F() { };
	    F.prototype = vehiclePrototype;

	    var f = new F();

	    f.init(model);

	    return f;
	}

	var car = vehicle('福特Escort');

	car.getModel();