var visible = false;

function toggleMenu(){
	if(visible){
		hideMenu();
	} else {
		showMenu();
	}
}

function showMenu(){
	// fade in bg
	$('#menubg').fadeIn(500);
	visible = true;
}

function hideMenu(){
	// fade out bg
	$('#menubg').fadeOut(500);
	visible = false;
}

function goto(link){
	toggleMenu();
	setTimeout(function(){window.location = link}, 500);
}