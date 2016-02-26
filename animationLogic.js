var main = function() {
	Boolean isOpen = false;
  $('.icon-menu').click(function() {
  	if(isOpen){
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
    isOpen = !isOpen;
    }
    else
    {
    	$('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
    isOpen = !isOpen;
    }
  });

};


$(document).ready(main);