function $() {
	var elements = [];
	for(var i=0,len=argument;i<len;i++) {
		var element = arguments[i];
		if(typeof(element)==='string') {
			element=document.getElementById(element);
		}
		if(arguments.length===1){
			return element
		}
		elements.push(element);
	}
	return elements;
}
/**
 * a factory method
 */
(function(){
	function _$(els) {
		this.elements= [];
		for(var i=0,len=els.length;i<len;++i){
			var element = els[i];
			if(typeof(element)==='string'){
				element = document.getElementById(element);
			}
				this.elements.push(element);
		}
	}
	window.$ = function() {
		return new _$(arguments);
	};
	
	_$.prototype = {
		each :function() {
			
		},
		
	}
}())
