<?php

ini_set('display_errors', 'On');

include("_php/connect.php");	// connect to the database
include("_php/login.php");		// login or logout

?>

<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<html class='no-js'>
	<head>
	    <meta charset='utf-8'>
	    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
	    <title>Fabrica</title>
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

		<div class='black' id='header'>
			<div class='center'>
				<div id='headerbg'></div>
				<div id='menubg'></div>
				<div id='options'>
					<a class='static' href='javascript:toggleMenu();' id='menuclose'></a>
					<ul>
						<li>
							<a class='menulink' href='/apply'>Apply</a>
						</li>
						<li>
							<a class='menulink' href='/about'>About</a>
						</li>
						<li>
							<a class='menulink' href='/areas'>Areas</a>
						</li>
						<li>
							<a class='menulink' href='http://store.fabrica.it'>Store</a>
						</li>
					</ul>
				</div>
				<a class='homelink logo-icon normal' href='/' id='logo'></a>
				<div id='menu'>
					<a class='animate' href='javascript:toggleMenu();' id='menuopen'></a>
				</div>
				<hr>
			</div>
		</div>

		<div class='page black'>
			<div class='head'>
				<h1 id='headline'>
					Fabrica is a communications research centre.
				</h1>
				<hr class='primary'>
			</div>

			<div class='hook' id='hook'>
				<div id='loader'>
					<div class='spinner'></div>
				</div>
				<span class='hook-text'>Reloading...</span>
			</div>
			<div id='lifestream'></div>

			<?php

			include("_php/footer.php");

			?>

		</div>

		<script src="/_js/site.js" type="text/javascript"></script>
		
	</body>
</html>