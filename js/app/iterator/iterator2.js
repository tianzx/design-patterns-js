var Iterator =function(obj) {
	var current = 0;
	
	var next = function() {
		current +=1;
	};
	
	var isDone = function() {
		return current>=obj.length;
	}
	
	var getCurrItem = function() {
		return obj[current];
	};
	
	return {
		next:next,
		isDone:isDone,
		getCurrItem:getCurrItem
	}
};

var compare = function(iterator1,iterator2){
	while(!iterator1.isDone() && !iterator2.isDone()){
		if(iterator1.getCurrItem()!=iterator2.getCurrItem() ){
			throw new Error('iterator1 iterator2 not eq')
		}
		iterator1.next();
		iterator2.next();
	};
	console.log("success");
};
var iterator1 = new Iterator([1,2,3]);
var iterator2 = new Iterator([1,1,3]);
compare(iterator1,iterator2);