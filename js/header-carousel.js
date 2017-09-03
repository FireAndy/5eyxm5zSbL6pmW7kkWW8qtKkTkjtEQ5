// JavaScript Document
var carouselImages = ["images/big/Ezy6482.jpg",
					  "images/big/camilla.jpg",
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
				.fadeIn(5000);
		caroIndex++;
		caroIndex = caroIndex % carouselImages.length;
		setTimeout(carousel,10000);
	};
	carousel();
});