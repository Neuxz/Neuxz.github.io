function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}
var list = document.getElementById('mainContend');
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

var getHtml = function(index) {
	var url = "http://Neuxz.github.io"
	switch(index)
	{
		case 0: url += "/MangaDLEX/";
		break;
		case 1: url += "/RemoteCC_Client/";
		break;
		default: url += "/#";
	}
	var request = makeHttpObject();
	request.open("GET", url, true);
	request.send(null);
	request.onreadystatechange = function() {
  	if (request.readyState == 4)
  	{
  		$('#mainContend').empty();
    var loadSite = document.createElement('li');
	loadSite.insertAdjacentHTML('beforeend', request.responseText);
	list.appendChild(loadSite);
	}
	};
}

var main = function() {
  var isOpen = true;
  $('.icon-menu').click(function() {
  	if(isOpen){
    isOpen = !isOpen;
	closen();
    }
    else
    {
    isOpen = !isOpen;
	open();
    }
    console.log("IN");
  });
  $('.repo').click(function(){ getHtml($(this).index()); });
  $('.repo').hover(function() {
    $(this).removeClass('btn-primary').addClass('btn-warning');
    $(this).stop().animate({
        padding: '12px'
    }, 300);
}, function() {
    $(this).removeClass('btn-warning').addClass('btn-primary');
    $(this).stop().animate({
        padding: '3px'
    }, 300);
});

};
$(document).ready(main);