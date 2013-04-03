var menu;
var arMenu;

$(document).ready(function() {
	menu  = $("#menu ul");
	arMenu = menu.children("li");
	arMenu.click(selectMenu);
	repositionMenuAtBottom();
 	$(window).resize(function() {
 		repositionMenuAtBottom();
	});


});

function repositionMenuAtBottom(){
		verticalHeight = $(window).height();
		menuHeight = menu.height() + parseInt(menu.css("border-top-width")) ;
		bottomMenuPositon = verticalHeight - menuHeight;
  		$("#sliding").css("top", bottomMenuPositon);
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
}