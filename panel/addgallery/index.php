<?php

ini_set('display_errors', 'On');

// connect to the database
include("../../_php/connect.php");
include("../../_php/login.php");

?>

<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<html class='no-js'>
	<head>
	    <meta charset='utf-8'>
	    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
	    <title>Fabrica | Add Gallery</title>
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
	    <link rel="stylesheet" type="text/css" href="/_css/imgareaselect-animated.css" />
		<script src="/_js/other.js" type="text/javascript"></script>
		<script src="/_js/addgallery.js" type="text/javascript"></script>
		<script type="text/javascript" src="/_js/jquery.imgareaselect.pack.js"></script>
	</head>
	
	<body class='black'>

		<?php

		include("../../_html/header.html");

		?>

		<div class='page black'>
			<h1 id='headline'>
				<?php

				if(isset($_POST["thumbdest"])){
					echo "Drag to crop the thumbnail.";
				} else {
					echo "Add Gallery";
				}

				?>
			</h1>
			<hr class='primary'><br/>
		
			<?php

			function getEntries($table){
				$result = mysql_query("SELECT id,title FROM $table ORDER BY title");
				echo "var {$table} = new Array();\n";
				while($entry = mysql_fetch_assoc($result)){
					//echo "<option value='{$entry['id']}'>{$entry['title']}</option>";
					//echo "{$table}['{$entry['id']}'] = '{$entry['title']}';\n";
					echo "{$table}.push([{$entry['id']}, '{$entry['title']}']);\n";
				}
			}

			function printForm(){
				echo "<div class='studioleft' style='overflow: hidden;'>";
				echo "<form action='' method='post' enctype='multipart/form-data' name='galleryform'>";
				// select between a project or a news entry
				echo "<b>Section:</b><br/>";
				echo "<input type='radio' name='section' value='news'> News<br/>";
				echo "<input type='radio' name='section' value='project'> Project<br/><br/>";
				echo "<b>Entry:</b><br/>";
				echo "<select name='entries' id='entries'>";
				//getEntries("project");
				echo "</select><br/><br/>";
				// enter title and description of gallery
				echo "<b>Gallery Title:</b><br/>";
				echo "<input type='text' name='title' size='38'><br/><br/>";
				echo "<b>Gallery Description:</b><br/>";
				echo "<textarea name='description' cols='38' rows='10'></textarea><br/><br/>";
				// dynamically add new image upload fields
				echo "<b>Images:</b><br/>";
				echo "<div id='images'></div>";
				echo "<input type='hidden' name='imagecount' id='imagecount' value='0'>";
				echo "<a href='javascript:addImage();'>Add an image</a><br/><br/>";
				echo "<input type='submit' value='Save'><br/><br/>";
				echo "</form>";
				echo "</div>";
				echo "<div class='studioright'>";
				echo "</div>";
			}
			
			if(isset($_SESSION["loggedin"]) && $_SESSION["position"] == "admin"){
				echo "<script>";
				getEntries("project");
				getEntries("news");
				echo "</script>";
				printForm();
				// TODO: upon submitting gallery, prompt user to make thumbnails
			} else {
				// redirect to the user panel
				header("Location: /panel");
			}

			include("../../_php/footer.php");

			?>

		</div>

	</body>
</html>