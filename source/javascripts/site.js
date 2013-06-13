
//= require  "vendor/jquery"
//= require  "vendor/BigVideo/js/jquery-ui-1.8.22.custom.min"
//= require  "vendor/video/video"
//= require  "vendor/BigVideo/js/jquery.imagesloaded.min"
//= require  "vendor/BigVideo/js/bigvideo"
//= require  "vendor/jquery-lifestream/jquery.lifestream"
//= require  "vendor/stroll/js/stroll"
//= require  "vendor/FitText/jquery.fittext"
//= require  "vendor/Hook.js-master/mousewheel"
//= require  "vendor/Hook.js-master/hook"
//= require  "vendor/jquery-timeago/jquery.timeago"



var landing;
var isTouch = Modernizr.touch;
var BV;
var count = 0;
var list = [
	      {
	        service: "facebook_page",
	        user: "48283858451",
	        template: {
			    wall_post: '<a href="${link}" target="_blank"><div class="icon white-facebook"></div></a><div class="content"><p class="info"><a href="${link}">${title}</a></p><hr class="secondary" /></div>'
			  }
	      },
	      
	      {
	        service: "vimeo",
	        user: "fabrica",
	        template: {
	        	posted: '<a href="${url}" target="_blank"><div class="icon white-vimeo"></div></a><div class="content"><p class="info"><a href="${url}" title="${description}">${title}</a></p><hr class="secondary" /></div>',
	        	liked: '<a class="liked" href="${url}" target="_blank"><div class="icon white-vimeo"></div></a><div class="content"><p class="info">liked <a href="${url}" title="${description}">${title}</a></p><hr class="secondary" /></div>'
	        }
	      }
	    ];
$("#headline").fitText(1.0, { minFontSize: '14px', maxFontSize: '152px' });
$('#hook').hook({
	swipeDistance: 50,
	reloadPage: false,
	reloadEl: function(){
		 $('#lifestream ul').fadeOut(400,setupLifeStream);
		

	}
});
$(document).ready(function() {

	landing =  $("#landing");

	landing.click(function(e){
		e.preventDefault();
      	BV.show('videos/fabrica_teaser_web_720.mp4',{ambient:true});
      	
	});



  	$(window).resize(function() {
  		resizeSocialList();

	 });
	
	resizeSocialList();
  	setupLifeStream();

	
 	
});



Date.prototype.toISO8601 = function(date) {
          var pad = function (amount, width) {
              var padding = "";
              while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
                  padding += "0";
              return padding + amount.toString();
          }
          date = date ? date : new Date();
          var offset = date.getTimezoneOffset();
          return pad(date.getFullYear(), 4)
              + "-" + pad(date.getMonth() + 1, 2)
              + "-" + pad(date.getDate(), 2)
              + "T" + pad(date.getHours(), 2)
              + ":" + pad(date.getMinutes(), 2)
              + ":" + pad(date.getUTCSeconds(), 2)
              + (offset > 0 ? "-" : "+")
              + pad(Math.floor(Math.abs(offset) / 60), 2)
              + ":" + pad(Math.abs(offset) % 60, 2);
      };

function setupLifeStream(){
	if($('#lifestream ul').length > 0){
		$('#lifestream ul').remove();
	}
	
	$("#lifestream").lifestream({
		classname: "lifestream",
  		feedloaded: feedcallback,
		limit: 50,
	    list: list
	  });
}

 function resizeSocialList(){
 		stroll.unbind( '#lifestream ul');
 		var head = $(".head").outerHeight();
 		var header = $("#header-black").outerHeight();
		var verticalHeight = $(window).height();
		var listHeight = verticalHeight - (head + header+35);
		$("#lifestream").css("height", listHeight);
  		$("#lifestream ul").css("height", listHeight);
  		stroll.bind( '#lifestream ul', { live: true } );
	}



function feedcallback(){
      count++;
      // Check if all the feeds have been loaded
      if( count === list.length ){
        $("#lifestream li").each(function(){
       		
          var element = $(this),
              date = new Date(element.data("time"));
          if(element.children(".liked").length != 0){
          	element.remove();
          }
          if(element.children("a").length == 0){
         	element.prepend('<a class="twitter" target="_blank" href="'+element.data("url_complete")+'"><div class="icon white-twitter"></div></a>');
        	}
          element.find("p").append(' <span class="timeago" title="' + date.toISO8601(date) + '">' + date + "</span>");
           
        })
        $("#lifestream .timeago").timeago();
        $("#lifestream ul").delay(400).fadeIn(800,resizeSocialList);
        
        count=0;
      }
	stroll.bind( '#lifestream ul', { live: true } );
	
	

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


window.addEventListener('orientationchange', handleOrientation, false);
function handleOrientation() {
if (orientation == 0) {
	resizeSocialList();
}
else if (orientation == 90) {
	resizeSocialList();
}
else if (orientation == -90) {
	resizeSocialList();
}
else if (orientation == 180) {
	resizeSocialList();
}
else {
}
}

if (Modernizr.mq('only all and (max-width: 480px)')) { 

}else{
	$("#lifestream").addClass("fade");
}

