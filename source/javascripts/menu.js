//= require  "vendor/sticky/jquery.sticky"
var visible = false;

$(document).ready(function(){

    $('body').fadeIn(300);
    menuHover();
    $("#headline").fitText(1.0, { minFontSize: '14px', maxFontSize: '152px' });
    $("#header").sticky({topSpacing:0});

    $('.menulink').click(function(event){
        event.preventDefault();
        var link = this.href;
        //$('#menubg').fadeOut(300, function(){window.location = link});
        $('body').fadeOut(300, function(){window.location = link});
    });

    $('.homelink').click(function(event){
        event.preventDefault();
        var link = this.href;
        $('body').fadeOut(300, function(){window.location = link});
    });

});


function menuHover(){
    var menuopen = $("#menuopen");

    menuopen.hover(
        function() {
            menuopen.toggleClass("animate","static");
        }
    )

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
    $('#menubg').fadeIn(300);
    $('#options').fadeIn(400);
    visible = true;
}

function hideMenu(){
    // fade out bg
    $('#menubg').fadeOut(400);
    $('#options').fadeOut(300);
    visible = false;
}