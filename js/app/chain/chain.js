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
	
	_$.prototype = {
		each :function(fn) {
			for (var i=0,len=this.elements.length;i<len;i++) {
				fn.call(this,this.elements[i]);
			}
			return this;
		},
		setStyle :function(prop,val) {
			this.each(function(el) {
				el.style[prop] = val;
			})
			return this;
		},
		show: function() {
			var that = this;
			this.each(function(el){
				this.setStyle('display','block')
			});
			return this;
		},
		addEvent: function(type,fn){
			var add = function(el) {
				if (window.addEventListener) {
					el.addEventListener(type, fn, false);
				}
				else if (window.attachEvent) {
					el.attachEvent('on'+type, fn);
				}
			};
			this.each(function(el) {
				add(el);
			});
			return this;
		}
	};
	window.$ = function() {
		return new _$(arguments);
	};
}())
$(window).addEvent('load', function() {
	$('test1', 'test2').show().setStyle('background', 'red').addEvent('click', function(e) {
		$(this).setStyle('background', 'green');
	});
});