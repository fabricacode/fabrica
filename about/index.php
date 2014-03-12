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
	    <title>Fabrica | About</title>
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
				We are based in Italy and work globally.
			</h1>
			<br/>

			<div class='studioinfo'>
          		<div class='studioleft'>
          			<b>Our web site is in beta and under constant development. Check back soon for new content.</b><br/>
		            <br/>
		            Fabrica is a research workshop, new school and studio. It pursues research through making, producing groundbreaking projects in collaboration with the world’s best creative talents. Our desire is to positively impact upon social and cultural change. Fabrica pursues its own projects as well as working for others, from commercial clients to governments, NGOs and the cultural sector, developing tangible research, expertly communicated.<br/>
		            <br/>
		            Fabrica was created by Benetton in 1994, and projects have won Webbies, Academy Awards, Cannes Grand Prix, Art Directors Club and D&AD awards and more besides. If you are 25 or under, you can <a href="/apply">apply</a> for a scholarship to join our research community. If you are interested in collaborating, we'd be happy to talk.<br/>
		            <br/>
		            <b>Contact Us</b>
		            <br>
		            Fabrica
		            <br>
		            Villa Pastega, via Postioma 54/F
		            <br>
		            Catena di Villorba
		            <br>
		            31020, Treviso, Italy
		            <br>
		            <br>
		            <a href='mailto:fabrica@fabrica.it'>
		            	<span class='redirect'>ti.acirbaf@acirbaf</span>
		            </a>
		            <br>
		            Phone +39 0422 516111
		            <br/><br/>
          		</div>
          		<div class='studioright'>
		        	<div class='gmap' data-center='via Postioma 54/F Catena di Villorba 31020, Treviso, Italy' data-zoom='15' id='map'></div>
		        </div>
          	</div>

          	<?php

			include("../_php/footer.php");

			?>

        </div>

        <script src='http://maps.googleapis.com/maps/api/js?key=AIzaSyCKTYhE_M2R4xDkbw52flmdIfni7KlvWmk&amp;sensor=false' type='text/javascript'></script>
      	<script src="/_js/map.js" type="text/javascript"></script>
		
	</body>
</html>