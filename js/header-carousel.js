// JavaScript Document
var carouselImages = ["images/big/Ezy6482.jpg",
					  "images/big/camilla.jpg",
                      "images/big/EZYPRO_0075v3.jpg"
					 ];
var caroIndex = 0;
$(document).ready(function() {
	var carousel = function(){
		
		$('header').fadeOut(1000,function(){
			$('header')
				.css('background-image','url("'+ carouselImages[caroIndex] + '")')
				.fadeIn(500);
		});
		caroIndex++;
		caroIndex = caroIndex % carouselImages.length;
		setTimeout(carousel,7000);
	};
	carousel();
});