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
	$('#menubg').fadeIn(300);
	visible = true;
}

function hideMenu(){
	// fade out bg
	$('#menubg').fadeOut(300);
	visible = false;
}

function goto(link){
	toggleMenu();
	setTimeout(function(){window.location = link}, 300);
}