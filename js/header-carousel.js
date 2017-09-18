// JavaScript Document
var carouselImages = ["images/big/camilla.jpg",
                      "images/big/EZYPRO_0075v3.jpg",
                      "images/big/Ezy6482.jpg"
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
				.fadeIn(1000, function(){setTimeout(carousel,15000);});
		caroIndex++;
		caroIndex = caroIndex % carouselImages.length;
	};
	carousel();
});