var menu;
var arMenu;
var sliding;
var sections;

$(document).ready(function() {
	menu  = $("#menu ul");
	sliding  = $("#sliding");
	sections  = $("#sliding > div");
	arMenu = menu.children("li");
	 arMenu.click(selectMenu);
	
	repositionMenuAtBottom();

 	$(window).resize(function() {
 		repositionMenuAtBottom();
	});
 	
});

function repositionMenuAtBottom(){
		verticalHeight = $(window).height();
  		sections.css("min-height", verticalHeight);
	}

function openMenu(){

}

$(function() {
    var BV = new $.BigVideo();
	BV.init();
	if (Modernizr.touch) {
	    BV.show('images/cover.png');
	} else {
	    BV.show('videos/fabrica_teaser_web_720.mp4',{ambient:true});
	}
});


function selectMenu(){
	var $target = $(event.target);
	$target.toggleClass("active");
	console.log("test");
}
