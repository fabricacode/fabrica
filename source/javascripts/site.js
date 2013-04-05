var menu;
var arMenu;
var sliding;
var sections;
var landing;
var isTouch = Modernizr.touch;
var BV;


$(document).ready(function() {
	menu  = $("#menu ul");
	sliding  = $("#sliding");
	sections  = $("#sliding > div");
	landing =  $("#landing");
	arMenu = menu.children("li");
	arMenu.click(selectMenu);
	landing.click(function(e){
		e.preventDefault();
      	BV.show('videos/fabrica_teaser_web_720.mp4',{ambient:true});
      	console.log(e);
	});
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
    BV = new $.BigVideo({forceAutoplay:isTouch});
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
