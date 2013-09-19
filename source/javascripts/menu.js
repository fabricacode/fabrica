var visible = false;

$(document).ready(function(){

    $('body').fadeIn(300);

    $("#headline").fitText(1.0, { minFontSize: '14px', maxFontSize: '152px' });
    $("#header-white").sticky({topSpacing:0});

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