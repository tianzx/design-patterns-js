<script src="test.js"></script>
//var Composite = new Interface('Composite',['add','remove','getChild']);
//var GalleryItem =new Interface('GalleryItem',['hide','show']);

//DynamicGallery class.

var DynamicGallery = function(id){
	this.children = [];
	
	this.element =document.createElement('div');
	this.element.id = id;
	this.element.className='dynamic-gallery';
}

DynamicGallery.prototype = {
	
	//Implement the Composite interface.
	
	add: function(child){
		
	},
	remove :function(child){
		
	},
	getChild:function(i){
		
	},
	hide:function(){
		
	},
	show:function(){
		
	},
	getElement:function(){
		
	}
}

//GalleryImage class.
var GalleryImage = function(src){
	this.element = document.createElement('img');
	this.element.className = 'gallery-image';
	this.element.src = src;
}
GalleryImage.prototype = {
	add: function(child){
		
	},
	remove :function(child){
		
	},
	getChild:function(i){
		
	},
	hide:function(){
		
	},
	show:function(){
		
	},
	getElement:function(){
		
	}
}

var topGallery = new DynamicGallery('top-gallery');

topGallery.add((new GalleryImage('ipad.png')));
var vacationPhotos =  new DynamicGallery('vacation-photos');
for(var i=0;i<30;i++){
	vacationPhotos.add(new GalleryImage('ipad.png'))
}

topGallery.add(vacationPhotos);
topGallery.show();
vacationPhotos.hide();