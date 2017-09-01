/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
  if (matchMedia('(max-width: 767px)').matches) {
    jQuery(".sticky-navigation").removeClass('top');
  }
})

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

$(".video-container").fitVids();



/* =================================
===  MAILCHIMP                 ====
=================================== */

$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    url: "//ezypro10.us1.list-manage.com/subscribe/post?u=e06f13d9a97257bcf1f303496&amp;id=de7cd08b1d" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
});

function mailchimpCallback(resp) {
     if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);
        
    } else if(resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }  
}

/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-navigation').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    filter: ':not(.external)',
    changeHash: true
  });
});


/* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK - ADDED ON V1.5*/

if (matchMedia('(max-width: 480px)').matches) {
  $('.main-navigation a').on('click', function () {
    $(".navbar-toggle").click();
  });
}


/* NAVIGATION VISIBLE ON SCROLL */

var lastScrollTop = 0,
    scrollUp = false,
    scrollDown = false;

$(document).ready(function () {
  mainNav();
});

$(window).scroll(function () {
  mainNav();
});


// if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
  function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 0) $('.sticky-navigation').removeClass('top');
    else $('.sticky-navigation').addClass('top');
  }
}

if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
  function mainNav() {
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 0) {
      $('.sticky-navigation').removeClass('top');
      // jQuery('.sticky-navigation .container > .navbar-header').animate({'height': '30'});
    }
    else {
      $('.sticky-navigation').addClass('top');
      // jQuery('.sticky-navigation .container > .navbar-header').animate({'height': '0'});
    }
  }
}



/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
jQuery(function( $ ) {
	$('#download-button').localScroll({
		duration:1000
	});
});


/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura); 
  
}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});



/* =================================
===  WOW ANIMATION             ====
=================================== */
wow = new WOW(
  {
    mobile: false
  });
wow.init();



/* =================================
===  OWL CAROUSEL               ====
=================================== */
$(document).ready(function () {

    var afterOWLinit = function () {

        // Move pagination to the top
        $('#feedbacks').prepend($('.owl-controls'));

        var paginatorsLink = $('.owl-controls span');
        
        $('section.testimonials.ambassadors .background-image, section.testimonials.ambassadors .inlay').remove();
        $('section.testimonials.ambassadors').prepend('<div class="inlay"><div class="my-overlay"></div></div>');
        
        $.each(this.owl.userItems, function (i) {
            var profileImg = $($('.owl-item')[i]).find('img').attr('src');
            $(paginatorsLink[i]).css('background-image','url("'+profileImg+'")')
                                .attr('data-number',i);
            var bgImg = $($('.owl-item')[i]).find('.image').attr('data-bg-img');
            
            // Insert background image
            $('section.testimonials.ambassadors .inlay').prepend('<div style="background-image: url(images/clients-pic/'+bgImg+');" data-number="'+i+'" id="bg-'+i+'" class="background-image"></div>');
        });

        $('section.testimonials.ambassadors .background-image, .my-overlay').height($('#ambassadors').height());
        $('section.testimonials.ambassadors .background-image').css('z-index',0).css('opacity',0.0);
        var active = $('#feedbacks .owl-pagination .owl-page.active span').attr('data-number');
        $('#bg-'+active).css('z-index',1).css('opacity',1.0);
    }

    var beforeOWLmove = function() {
        var active = $('#feedbacks .owl-pagination .owl-page.active span').attr('data-number');
        $('#bg-'+active).addClass('inactivate').css('z-index',0);
    }

    var afterOWLmove = function() {
        var active = $('#feedbacks .owl-pagination .owl-page.active span').attr('data-number');
        $('#bg-'+active).css('z-index',1);
        $('#bg-'+active).animate({ opacity: 1.0 }, 300);
        setTimeout(function() {
            $('.background-image.inactivate').css('opacity',0.0).removeClass('inactivate');
        },300);
    }


    $("#feedbacks").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 800,
        paginationSpeed: 400,
        autoPlay: 10000,
        stopOnHover: true,
        singleItem: true,
        afterInit: afterOWLinit, // do some work after OWL init
        afterUpdate : afterOWLinit,
        beforeMove: beforeOWLmove, 
        afterMove: afterOWLmove, 
    });

    var owl = $("#screenshots");

    owl.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
    });

    // $('#feedbacks .owl-item').on('mouseover', function (e){
    //   console.log('hover', owl.trigger('stop.owl.autoplay'));
    //     owl.trigger('stop.owl.autoplay');
    // });

    // $('#feedbacks .owl-item').on('mouseleave', function (e){
    //     console.log('hover no more', owl.trigger('play.owl.autoplay'));
    // });

    // $('#feedbacks .owl-item img').on('click', function (e){
    //     e.preventDefault();
    //     var slideTo = $(this).find('img').data('to');
    //     owl.trigger('to.owl.carousel', [slideTo]);
    //     owl.trigger('stop.owl.autoplay');
    // });

});



/* =================================
===  Nivo Lightbox              ====
=================================== */
$(document).ready(function () {

    $('#screenshots a').nivoLightbox({
        effect: 'fadeScale',
    });

});



/* =================================
===  SUBSCRIPTION FORM          ====
=================================== */
$("#subscribe").submit(function (e) {
    e.preventDefault();
    var email = $("#subscriber-email").val();
    var dataString = 'email=' + email;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email)) {
        $.ajax({
            type: "POST",
            url: "subscribe/subscribe.php",
            data: dataString,
            success: function () {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                $('.hide-after').fadeOut(500);
            }
        });
    } else {
        $('.subscription-error').fadeIn(1000);
    }

    return false;
});



/* =================================
===  CONTACT FORM          ====
=================================== */
$("#contact").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }

    return false;
});




/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
$('.expand-form').simpleexpand({
    'defaultTarget': '.expanded-contact-form'
});



/* =================================
===  STELLAR                    ====
=================================== */
$(window).stellar({ 
    horizontalScrolling: false 
});


/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

var userLang = navigator.language || navigator.userLanguage;
if (userLang === 'da-DK' || userLang === 'da' || userLang === 'no' || userLang === 'sv' || userLang === 'sv-FI' ) {
    var pageLang = 'da';
} else {
    var pageLang = 'en';
}

$('.lang-'+pageLang).show();
$('body').addClass('language-'+pageLang);

$('.language-switch').click(function(e) {
    $('.lang-da, .lang-en').toggle();
    if (pageLang === 'en') { pageLang = 'da'; } else { pageLang = 'en'; }
    $('body').removeClass('language-da').removeClass('language-en').addClass('language-'+pageLang);
});
