/*
 	comment 
 	
 	interface Composite {
 		function add(child);
 		function remove(child);
 		function getChild(index);
 	}
 	
 	interface FormItem{
 		function save();
 	}
*/
var CompositeForm = function(id,method,action) {
	this.implementsInterfaces = ['composite','formItem'];
}
function addForm(formInstance) {
	if(!implements(formInstance, 'Composite', 'FormItem')) {
	throw new Error("Object does not implement a required interface.");
	}
}
function implements(object){
	for(var i=1;i<arguments.length;i++) {
		var interfaceName =  arguments[i];
		var interfaceFound =false;
		for(var j=0;j<object.implementsInterfaces.length;j++){
			interfaceFound = true;
			break;
		}
		if(!interfaceFound){
			return false;
		}
	}
	return true;
}