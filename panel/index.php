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
	    <title>Fabrica | User Panel</title>
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
			<h2 id='headline'>

				<?php
					if(isset($_SESSION["loggedin"])){
						echo "Hello, " . $_SESSION["firstname"] . ".<br/>what would you like to do?";
						echo "<div class='form' id='logout'>";
						echo "<form name='logout' action='' method='post'>";
						echo "<input type='hidden' name='logout' value='logout'>";
						echo "<input type='submit' value='Logout'>";
						echo "</form>";
						echo "</div>";
					} else {
						echo "Login to get info and make changes.";
					}
				?>
				
			</h1>
			<div class='apply'>
				<p class='about'>

					<?php
						if(!isset($_SESSION["loggedin"])){
							echo "The user panel is designed to give you access to information relevant to your position at Fabrica, as well as provide you the ability to modify settings, change your biographical information, and create content for the Fabrica web site. Only staff, consultants, and residents and trial residents have login permissions for the user panel. If you haven't received an email with instructions on how to access your user panel, please get in contact with Stefano Bosco.<br/>";
						}
					?>

				</p>
			</div>

			<br/>
			<hr class="primary">
			<br/>

		
			<?php

			function showLogin(){
				echo "<div class='form'>";
				echo "<form name='login' action='' method='post'>";
				echo "<input type='hidden' name='login' value='login'>";
				echo "<b>Username:</b><br/><input type='text' name='username'><br/><br/>";
				echo "<b>Password:</b><br/><input type='password' name='password'><br/><br/>";
				echo "<input type='submit' value='Login'>";
				echo "</form>";
				echo "</div>";
			}

			function showMenu(){
				// admin options
				if($_SESSION["position"] == "admin"){
					echo "<div class='quarters'><a href='addnews'><img src='../_images/panel_addnews.png'><br/><br/>Add News</a><br/><br/></div>";
					echo "<div class='quarters'><a href='editnews'><img src='../_images/panel_editproject.png'><br/><br/>Edit News</a><br/><br/></div>";
					echo "<div class='quarters'><a href='addproject'><img src='../_images/panel_addproject.png'><br/><br/>Add Project</a><br/><br/></div>";
					echo "<div class='quarters' style='margin-right: 0px;'><a href='editproject'><img src='../_images/panel_editproject.png'><br/><br/>Edit Project</a><br/><br/></div>";
					echo "<div class='quarters'><a href='../applications/'><img src='../_images/panel_reviewapplications.png'><br/><br/>Review Applications</a><br/><br/></div>";
					echo "<div class='quarters'><a href='addgallery'><img src='../_images/panel_addnews.png'><br/><br/>Add Gallery</a><br/><br/></div>";
					echo "<div class='quarters'><a href='editgallery'><img src='../_images/panel_editproject.png'><br/><br/>Edit Gallery</a><br/><br/></div>";
					echo "<div class='quarters' style='margin-right: 0px;'><a href='settings'><img src='../_images/panel_editproject.png'><br/><br/>User Settings</a><br/><br/></div>";
				}
			}
			
			if(isset($_SESSION["loggedin"])){
				// menu options
				showMenu();
			} else {
				// login form
				showLogin();
			}

			include("../_php/footer.php");

			?>

		</div>

		<script src="/_js/other.js" type="text/javascript"></script>
		
	</body>
</html>