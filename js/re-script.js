$(document).ready(function() {
  //////////////|\\\\\\\\\\\\\\\
  //|  Resize Buy box left   |\\
  //| or right, so they are  |\\
  //|     the same size.     |\\
  //////////////|\\\\\\\\\\\\\\\
  var buyBoxSize = function (parent) {
    var boxLeft = $(parent).find('.buybox-left');
    var boxRight = $(parent).find('.buybox-right');
    var boxLeftText = boxLeft.find('.buybox-text');
    var boxRightText = boxRight.find('.buybox-text');

    originalBoxLeftSize = boxLeftText.attr('data-org-box-left');
    originalBoxRightSize = boxRightText.attr('data-org-box-right');
    
    if (!originalBoxLeftSize && !originalBoxRightSize) {
      originalBoxLeftSize = boxLeftText.height();
      originalBoxRightSize = boxRightText.height();
      boxLeftText.attr('data-org-box-left', originalBoxLeftSize);
      boxRightText.attr('data-org-box-right', originalBoxRightSize);
    }

    // Reset height to original
    boxLeftText.height(originalBoxLeftSize);
    boxRightText.height(originalBoxRightSize);
    
    if (boxLeft.height() > boxRight.height()) {
      var leftHeight = boxRightText.height();
      boxRightText.height(leftHeight);
    } else {
      var rightHeight = boxRightText.height();
      boxLeftText.height(rightHeight);
    }
  }

  function bindFunction() {
    buyBoxSize('#buynow');
    buyBoxSize('#buynow-powerblend');
  }
  
  bindFunction();
  $(window).bind('resize', bindFunction());

  // Animated scroll to anchors
  var scrollAnimationTime = 1200;
  $('a.rescroll').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').animate({
      'scrollTop': $(target).offset().top
    }, scrollAnimationTime, function () {
      window.location.hash = target;
    });
  });

});
