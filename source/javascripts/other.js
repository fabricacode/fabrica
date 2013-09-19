//= require  "vendor/jquery"
//= require  "vendor/FitText/jquery.fittext"
//= require  "vendor/sticky/jquery.sticky"
//= require  "menu"

$(document).ready(function() {
    $("#headline").fitText(1.0, { minFontSize: '14px', maxFontSize: '152px' });
    $("#header-white").sticky({topSpacing:0});
});