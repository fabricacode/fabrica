//= require  "vendor/jquery"
//= require  "vendor/BigVideo/js/jquery-ui-1.8.22.custom.min"
//= require  "vendor/video/video"
//= require  "vendor/BigVideo/js/jquery.imagesloaded.min"
//= require  "vendor/BigVideo/js/bigvideo"
//= require  "vendor/jquery-lifestream/jquery.lifestream"

//= require  "vendor/FitText/jquery.fittext"
//= require  "vendor/sticky/jquery.sticky"
//= require  "vendor/jquery-timeago/jquery.timeago"


$("#header-black").sticky({topSpacing:0});
var landing;
var isTouch = Modernizr.touch;
var BV;
var count = 0;
var list = [
	      {
	        service: "facebook_page",
	        user: "48283858451",
	        template: {
			    wall_post: '<a href="${link}" target="_blank"><div class="icon white-facebook"></div></a><div class="content"><p class="info">${description}</p><hr class="secondary" /></div>'
			  }
	      },
	      
	      {
	        service: "vimeo",
	        user: "fabrica",
	        template: {
	        	posted: '<a href="${url}" target="_blank"><div class="icon white-vimeo"></div></a><div class="content"><p class="info"><a href="${url}" title="${description}">${title}</a></p><hr class="secondary" /></div>',
	        	liked: '<a class="liked" href="${url}" target="_blank"><div class="icon white-vimeo"></div></a><div class="content"><p class="info">liked <a href="${url}" title="${description}">${title}</a></p><hr class="secondary" /></div>'
	        }
	      },
	      {
	        service: "twitter",
	        user: "fabrica",
	        template: {
			    posted: '<div class="content"><p class="info">{{html tweet}}</p><hr class="secondary" /></div>'
			  }
	      }
	      
	    ];
$("#headline").fitText(1.0, { minFontSize: '14px', maxFontSize: '152px' });

$(document).ready(function() {

	landing =  $("#landing");

	landing.click(function(e){
		e.preventDefault();
      	BV.show('videos/background_07052013.mp4',{ambient:true});
      	
	});




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

         	element.prepend('<a class="twitter" target="_blank" href="'+element.data("url")+'"><div class="icon white-twitter"></div></a>');
        	}
          element.find("p").append(' <span class="timeago" title="' + date.toISO8601(date) + '">' + date + "</span>");
           
        })
        $("#lifestream .timeago").timeago();
        $("#lifestream ul").delay(400).fadeIn(800);
        
        count=0;
      }

	
	

}

$(function() {
    BV = new $.BigVideo({forceAutoplay:isTouch});
	BV.init();
	if (Modernizr.touch) {
	    BV.show('images/cover.png');
	} else {
	    BV.show('videos/background_07052013.mp4',{ambient:true});
	}
});



