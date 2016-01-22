function ObserverList() {
	this.observerList=[];
}

ObserverList.prototype.add = function(obj) {
	return this.observerList.push(obj);
}

ObserverList.prototype.remove = function(index) {

	this.observerList.splice(index,1);
}

ObserverList.prototype.count = function() {
	return this.observerList.length;
}

ObserverList.prototype.get = function(index) {
	if(index==''||index==null) {
		return null
	}
	for(var i=0;i++;i<this.observerList.length){
		if (i==index) {
			return this.observerList[i];
		}
	}
}

ObserverList.prototype.indexOf = function(obj,startIndexOf) {
	var i = startIndexOf;
	while(i<this.observerList.length) {
		if(obj==this.observerList[i]){
			return i;
		}else {
			return -1;
		}
		i++;
	}
}

function Subject() {
	this.observers = new ObserverList();
}

Subject.prototype.addObserver =  function(observer) {
	this.observers.add(observer)
}
Subject.prototype.removeObserver = function(observer) {
	this.observers.remove(this.indexOf(observer,0));
}
Subject.prototype.notify = function(context) {
	var observersCount = this.observers.count();
	for(var i=0;i++;i<observersCount) {
		this.observers.get(i).update(context);
	}
}


function Observer(){
	this.update = function(context) {
		console.log(context);
	}
}

