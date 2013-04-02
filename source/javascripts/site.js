$(document).ready(function() {
	repositionMenuAtBottom();
 	$(window).resize(function() {
 		repositionMenuAtBottom();
	});


});

function repositionMenuAtBottom(){
		verticalHeight = $(window).height();
		menuHeight = $("#menu ul").height();
		console.log(verticalHeight,menuHeight);
		bottomMenuPositon = verticalHeight - menuHeight;
  		$("#sliding").css("top", bottomMenuPositon);
	}