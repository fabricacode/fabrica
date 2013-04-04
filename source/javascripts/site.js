var menu;
var arMenu;
var sliding;

$(document).ready(function() {
	menu  = $("#menu ul");
	sliding  = $("#sliding");
	arMenu = menu.children("li");
	arMenu.click(selectMenu);
	
	repositionMenuAtBottom();
 	$(window).resize(function() {
 		repositionMenuAtBottom();
	});
 	$("#menu").scrollspy();

});

function repositionMenuAtBottom(){
		verticalHeight = $(window).height();
  		sliding.css("margin-top", verticalHeight);
	}

function openMenu(){

}





$(function() {
    var BV = new $.BigVideo();
	BV.init();
	if (Modernizr.touch) {
	    BV.show('images/cover.png');
	} else {
	    BV.show('videos/100pasos.mp4',{ambient:true});
	}
});


function selectMenu(){
	var $target = $(event.target);
	$target.toggleClass("active");
	$target.preventDefault();
  	$(this).tab('show');
}
