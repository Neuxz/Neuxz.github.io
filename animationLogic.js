var main = function() {
  var isOpen = false;
  $('.icon-menu').click(function() {
  	console.log("IN");
  	if(isOpen){
    $('.menu').animate({left: "0px"}, 205);

    $('body').animate({
      left: "300px"
    }, 200);
    isOpen = !isOpen;

    }
    else
    {
    $('.menu').animate({left: "-285px"}, 205);

    $('body').animate({
      left: "0px"
    }, 200);
    isOpen = !isOpen;

    }
  });

};
$(document).ready(main);