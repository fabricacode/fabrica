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
	    <title>Fabrica | Social Campaigns</title>
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

		include("../../_html/header.html");

		?>

		<div class='page black'>
			<h2 id='headline'>
				<a href="#" class="areaname">social campaigns</a> create movements that bring attention to important contemporary issues.
			</h2>
			<br/>

			<?php

			// get all projects from the editorial area
			$index = 1;
			$colcount = 1;
			$result = mysql_query("SELECT id,title,link,mainthumb FROM project WHERE area = 'campaign' ORDER BY enddate DESC");
			while($project = mysql_fetch_assoc($result)){
				if($colcount == 1){
					echo "<div class='row'>";
				}
				if($index % 3 == 0){
					echo "<div class='thirds' style='margin-right: 0px'>";
				} else {
					echo "<div class='thirds'>";
				}
				echo "<a href='/projects/" . $project['link'] . "'>";
				echo "<img src='" . $project['mainthumb'] . "' class='projectthumb'>";
				echo "<span class='projecttitle'>" . $project['title'] . "</span>";
				echo "</a>";
				echo "<span class='projecttags'>";
				$tagresults = mysql_query("SELECT tag FROM project_tags WHERE project_id = '{$project['id']}' ORDER BY tag ASC");
				$numtags = mysql_num_rows($tagresults);
				$tagindex = 0;
				while($tags = mysql_fetch_assoc($tagresults)){
					echo "<a href='/projects/tag/" . $tags['tag'] . "'>" . $tags['tag'] . "</a>";
					$tagindex++;
					if($tagindex < $numtags){
						echo ", ";
					}
				}
				echo "</span>";
				echo "</div>";
				if($colcount == 3){
					echo "</div>";
				}
				$index++;
				$colcount++;
				if($colcount > 3){
					$colcount = 1;
				}
			}

			include("../../_php/footer.php");

			?>

        </div>

        <script src="/_js/other.js" type="text/javascript"></script>
		
	</body>
</html>