var open = function() {
	$('.menu').animate({left: "-285px"}, 205);
	$('.repo').animate({top: "-285px"}, 100);
    $('body').animate({
      left: "0px"
    }, 200);
}

var closen = function() {
	  $('.menu').animate({left: "0px"}, 205);
	$('.repo').animate({top: "0px"}, 500);
    $('body').animate({
      left: "300px"
    }, 200);
} 

var main = function() {
  var isOpen = true;
  $('.icon-menu').click(function() {
  	console.log("IN");
  	if(isOpen){
    isOpen = !isOpen;
	closen();
    }
    else
    {
    isOpen = !isOpen;
	open();
    }
  });
  $('.repo').click(function() {
  	closen();
  	});
  $('.repo').hover(function() {
    $(this).removeClass('btn-primary').addClass('btn-warning');
    $(this).stop().animate({
        padding: '12px'
    }, 300);
}, function() {
    $(this).removeClass('btn-warning').addClass('btn-primary');
    $(this).stop().animate({
        padding: '7px'
    }, 300);
});

};
$(document).ready(main);