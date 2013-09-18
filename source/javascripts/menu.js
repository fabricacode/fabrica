var visible = false;

$(document).ready(function(){
	$('.menulink').click(function(event){
		event.preventDefault();
		var link = this.href;
		$('#menubg').fadeOut(300, function(){window.location = link});
	});
});

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