// JavaScript Document
//hide h1 elements
var h = document.getElementsByClassName("intro");
for (var i = h.length; i--; ) {
    h[i].style.display = 'none';
}
//Carousel view for .img
var carouselImages = ["images/big/camilla.jpg",
                      "images/big/bag.jpg",
                      "images/big/daniel.jpg",
                      "images/big/kokos.jpg",
                      "images/big/EZYPRO_0075v3.jpg"
					 ];
var caroIndex = 0;
var loadedImages = new Array();
$(document).ready(function() {
	
	/*for(var i = 0; i < carouselImages.length; i++){
		loadedImages[i] = new Image();
		loadedImages[i].src = carouselImages[i];
	}*/
	var carousel = function(){
			$('header')
				.css('background-image','url("'+ carouselImages[caroIndex] + '")')
				.fadeIn(1000, function(){setTimeout(carousel,12000);}); 
        
        if(caroIndex==0){
                h[4].style.display = 'none';
                h[caroIndex].style.display = '';
        }
        else{
                hideText();
                showText();
        }

        
        caroIndex++;
		caroIndex = caroIndex % carouselImages.length;
	};
	carousel();
});

var hideText = function(){
    h[caroIndex-1].style.display = 'none';
}
var showText = function(){
    h[caroIndex].style.display = '';
}
