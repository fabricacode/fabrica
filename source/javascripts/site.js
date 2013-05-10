
var landing;
var isTouch = Modernizr.touch;
var BV;
var count = 0;
var list = [
	      {
	        service: "facebook_page",
	        user: "48283858451",
	        template: {
			    wall_post: '<div class="icon white-facebook"></div><div class="content"><p class="info">post on wall <a href="${link}">${title}</a></p><hr class="secondary" /></div>'
			  }
	      },
	      {
	        service: "twitter",
	        user: "fabrica",
	        template: {
			    posted: '<div class="icon white-twitter"></div><div class="content"><p class="info">{{html tweet}}</p><hr class="secondary" /></div>'
			  }
	      },
	      {
	        service: "vimeo",
	        user: "fabrica",
	        template: {
	        	posted: '<div class="icon white-vimeo"></div><div class="content"><p class="info">posted <a href="${url}" title="${description}">${title}</a></p><hr class="secondary" /></div>',
	        	liked: '<div class="icon white-vimeo"></div><div class="content"><p class="info">liked <a href="${url}" title="${description}">${title}</a></p><hr class="secondary" /></div>'
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
 		var head = $(".head").height();
 		
		var verticalHeight = $(window).height();
		var listHeight = verticalHeight-head;
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


