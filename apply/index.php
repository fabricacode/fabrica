<?php

ini_set('display_errors', 'On');

// connect to the database
include("../_php/connect.php");
include("../_php/login.php");

?>

<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<html class='no-js'>
	<head>
	    <meta charset='utf-8'>
	    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
	    <title>Fabrica | Apply</title>
	    <meta name='description'>
	    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
	    <meta content='yes' name='apple-mobile-web-app-capable'>
	    <meta content='black' name='apple-mobile-web-app-status-bar-style'>
	    <meta content='Fabrica' property='og:title'>
	    <meta content='website' property='og:type'>
	    <meta content='http://fabrica.it' property='og:url'>
	    <meta content='http://fabrica.it/images/fabrica_fb.png' property='og:image'>
	    <meta content='Fabrica' property='og:site_name'>
	    <meta content='Applied Arts and Communications Research Center' property='og:description'>
		<meta content='fabrica, benetton, visual communication, design, photography, interactive, video, music, fabricanti, colors magazine' name='KEYWORDS'>
	    <meta content='351002218351232' property='fb:app_id'>
	    <meta content='wkzLpr1bbZjOcUQ2WQzd5wVVFrI7GxOtUHVU8X4TBXQ' name='google-site-verification'>
	    <script src="/_js/vendor/modernizr.js" type="text/javascript"></script>
	    <!-- Favicons and touch icons -->
	    <!-- For retina-display iPads -->
	    <link href='apple-touch-icon-144x144-precomposed.png' rel='apple-touch-icon-precomposed' sizes='144x144' type='image/png'>
	    <!-- For retina-display iPhones -->
	    <link href='apple-touch-icon-144x144-precomposed.png' rel='apple-touch-icon-precomposed' sizes='114x114' type='image/png'>
	    <!-- For iPad 1 -->
	    <link href='apple-touch-icon-72x72-precomposed.png' rel='apple-touch-icon-precomposed' sizes='72x72' type='image/png'>
	    <!-- For iPhone 3G, iPod Touch and Android -->
	    <link href='apple-touch-icon-57x57-precomposed.png' rel='apple-touch-icon-precomposed' type='image/png'>
	    <!-- For Nokia -->
	    <link href='apple-touch-icon-original.png' rel='shortcut icon'>
	    <!-- For everything else -->
	    <link href='/favicon.png' rel='shortcut icon' type='image/png'>
	    <link href='/favicon.ico' rel='shortcut icon' type='image/x-icon'>
	    <!-- For Google+ bidirectional linking -->
	    <link href='https://plus.google.com/103695675753742819996' rel='publisher'>
	    <link href="/_css/site.css" media="screen" rel="stylesheet" type="text/css" />
	</head>
	
	<body class='black'>

		<?php

		include("../_html/header.html");

		?>

		<div class='page black'>
			<h1 id='headline'>
				Applications are accepted throughout the year.
			</h1>
			<div class='apply'>
				<p class='about'>
			    	We are looking for interesting and interested people to become researchers at Fabrica. You might be a coder, graphic designer, musician, industrial designer, filmmaker, motion graphics artist, writer, illustrator, interaction designer, animator, some combination of these or even something else. You must be 25 years old or younger. Please see the Facebook pages for <a href="http://www.facebook.com/pages/Fabrica/48283858451">Fabrica</a> and <a href="http://www.facebook.com/colorsmagazine">Colors</a> for more information about the projects we are currently working on.<br/>
			    	<br/>
			    	Please see the <a href="/areas">Areas</a> section for a guide to the current areas running at Fabrica — you will be asked to select which area you are interested in joining.<br/>
			    	<br/>
				</p>
			</div>

			<br/>

			<div class='form'>
          		<div id='wufoo-m7x3z9'></div>
        	</div>

			<!--
			<div class='form'>

				<?php
				// if(isset($_POST["firstname"])){
				// 	// verify submission
				// 	include("../_php/process_application.php");
				// } else {
				// 	// draw form
				// 	include("../_html/applyform.html");
				// }
				?>

			</div>
			-->

			<?php

			include("../_php/footer.php");

			?>

		</div>

		<script>
	        var m7x3z9;(function(d, t) {
	        var s = d.createElement(t), options = {
	        'userName':'thankyouforyoursubmission',
	        'formHash':'m7x3z9',
	        'autoResize':true,
	        'height':'928',
	        'async':true,
	        'header':'hide',
	        'ssl':false};
	        s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
	        s.onload = s.onreadystatechange = function() {
	        var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
	        try { m7x3z9 = new WufooForm();m7x3z9.initialize(options);m7x3z9.display(); } catch (e) {}};
	        var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
	        })(document, 'script');
      	</script>

		<script src="/_js/other.js" type="text/javascript"></script>
		
	</body>
</html>