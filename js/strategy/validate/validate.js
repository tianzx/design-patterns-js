var validator= {
	//所有可以的验证规则处理类存放的地方，后面会单独定义
	types: {},
		
	validate : function(data) {
		var i;
		for(i in data) {
			console.log(data[i]);
		}
		if(!data.sex) {
			//console.log("sex为空")
		}
		if(!data.name) {
			//console.log("name为空")
		}
		
		console.log("成功校验。。。")
	}
}

var data = {
	sex:"male",	
	name:"test"
}
validator.types.validateNum = function(data) {
	
}
//验证给定的值是否不为空
validator.types.isNonEmpty = {
    validate: function (value) {
        return value !== "";
    },
    instructions: "传入的值不能为空"
};
validator.config = {
	    name: 'isNonEmpty'
};
validator.validate(data);