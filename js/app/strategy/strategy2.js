var strategy_sort =  {
	"insert" : function(dataArray) {
		
		console.log("this is a insert sort");
		return ;
	},
	"merge"  : function(dataArray) {
		var ins = Array.instanceof(dataArray);
		console.log(ins);
		console.log("this is a merge sort");
		return ;
	}
}

var sort = function(strategy,dataArray) {
	return strategy_sort[strategy](dataArray);
}

sort("merge",[1,2,3]);
