
var iframew = $("iframe").width();
var iframeh = $("iframe").height();
var videoAR = iframeh / iframew;
$("iframe").css("width", "100%");

$(document).ready(function() {
	var newheight = $("iframe").width() * videoAR;
	$("iframe").css("height", newheight); 
});

$(window).resize(function() {
	var newheight = $("iframe").width() * videoAR;
	$("iframe").css("height", newheight); 
});