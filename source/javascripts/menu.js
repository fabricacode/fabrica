var visible = false;





window.onload = function(event){
	// look for all menu links and switch their HREF
	$('.menulink').each(function(i){
		var link = $(this).attr('href')
		var newlink = "javascript:goto('" + link + "');";
		$(this).attr('href', newlink);
	});

}

function toggleMenu(){
	if(visible){
		hideMenu();
	} else {
		showMenu();
	}
}

function showMenu(){
	// fade in bg
	//$('body').css('overflow','hidden');
	$('#menubg').fadeIn(300);
	visible = true;
}

function hideMenu(){
	// fade out bg
	//$('body').css('overflow','scroll');
	$('#menubg').fadeOut(300);
	visible = false;
}

function goto(link){
	toggleMenu();
	setTimeout(function(){window.location = link}, 300);
}