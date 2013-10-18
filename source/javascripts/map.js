//= require  "vendor/jquery"
//= require  "vendor/mobileGmap/jquery.mobilegmap"
//= require  "vendor/FitText/jquery.fittext"
//= require  "menu"

$(document).ready(function() {
	$('.gmap').mobileGmap();
	$("#headline").fitText(1.0, { minFontSize: '14px', maxFontSize: '152px' });
    var stylez = [
        {
            featureType: "all",
            elementType: "all",
            stylers: [
                { saturation: -100 } // <-- THIS
            ]
        }
    ];
    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
    $('.gmap').mapTypes.set('tehgrayz', mapType);
	
 	
});