//= require  "vendor/jquery"
//= require  "vendor/mobileGmap/jquery.mobilegmap.js"
//= require  "vendor/FitText/jquery.fittext"
//= require  "vendor/sticky/jquery.sticky"

$(document).ready(function() {
	$('.gmap').mobileGmap();
	$("#headline").fitText(1.0, { minFontSize: '14px', maxFontSize: '152px' });
	$("#header-white").sticky({topSpacing:0});
	
 	
});