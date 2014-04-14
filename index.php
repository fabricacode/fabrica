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
	    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
	    <link href="/_css/site.css" media="screen" rel="stylesheet" type="text/css" />
	</head>
	
	<body class='black'>

		<?php

		include("_html/header.html");

		?>

		<div class='page black'>
			<div class='head'>
				<h1 id='headline'>
					Fabrica is a communications research centre.
				</h1>
			</div>			

      		<div class='studioleft'>
      			<div class="frontmenu">
      				<a href="/areas/campaign/">
      					<img src="/_images/socialcampaigns.jpg">
          				<span class="frontmenutext">social campaigns</span>
          			</a>
          		</div>
      		</div>
      		<div class='studioright'>
      			<div class="frontmenu">
      				<a href="/areas/design/">
      					<img src="/_images/design.jpg">
		        		<span class="frontmenutext">design</span>
		        	</a>
		        </div>
	        </div>
      		<div class='studioleft'>
      			<div class="frontmenu">
      				<a href="/areas/editorial/">
      					<img src="/_images/editorial.jpg">
          				<span class="frontmenutext">editorial</span>
          			</a>
          		</div>
      		</div>
      		<div class='studioright'>
      			<div class="frontmenu">

		        	<div id="newscarousel" class="carousel slide" data-ride="carousel">

		        		<?php

		        		// grab the 5 most recent news entries
		        		$result = mysql_query("SELECT title,link,mainthumb FROM news ORDER BY dt DESC LIMIT 5");
		        		$newscount = mysql_num_rows($result);

		        		// print out the carousel controls first
		        		echo "<ol class='carousel-indicators'>";
		        		for($i=0; $i<$newscount; $i++){
		        			if($i == 0){
		        				echo "<li data-target='#newscarousel' data-slide-to='0' class='active'></li>";
		        			} else {
		        				echo "<li data-target='#newscarousel' data-slide-to='" . $i . "'></li>";
		        			}
		        		}
		        		echo "</ol>";

		        		// iterate over news entries and print out carousel elements
		        		echo "<div class='carousel-inner'>";
		        		$first = True;
		        		while($news = mysql_fetch_assoc($result)){
		        			if($first){
		        				echo "<div class='item active news'>";
		        				$first = False;
		        			} else {
		        				echo "<div class='item news'>";
		        			}
		        			echo "<a href='/news/" . $news["link"] . "'>";
		        			echo "<img src='" . $news["mainthumb"] ."'>";
		        			echo "<div class='frontmenutext'>" . $news["title"] . "</div>";
		        			echo "</a></div>";
		        		}
		        		echo "</div>";

		        		?>

						<!-- Controls -->
						<!--
						<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left"></span>
						</a>
						<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right"></span>
						</a>
						-->
					</div>

					<div class='frontmenutext' style="left: 20px; top: 20px; width: auto;">
						<a href="news">news</a>
					</div>

		        </div>
	        </div>

	        <link href="/_css/lok.css?1389880772" media="screen" rel="stylesheet" type="text/css" />

			<div id="lokfaketwitter">
				<a href="http://www.loksabhaindia.org"  title="Ten young Indian photographers narrate their own country">
					<div id="loksabhaicon"></div>
					<div id="loksabha">#loksabha  Ten young Indian photographers narrate their own country</div>
				</a>
			</div>

			<div id='lifestream'></div>
			<br/>

			<div style="float: left; width: 100%;">
				<div id='socialbuttons'>
					<a target='_new' href='https://www.facebook.com/fabricaresearchcentre'>
						<img src='/_images/social_facebook.png' class='socialbutton' />
					</a>
					<a target='_new' href='https://twitter.com/fabrica'>
						<img src='/_images/social_twitter.png' class='socialbutton' />
					</a>
					<a target='_new' href='http://www.vimeo.com/fabrica'>
						<img src='/_images/social_vimeo.png' class='socialbutton' />
					</a>
	            </div>
	        </div>

			<?php

			include("_php/footer.php");

			?>

		</div>

		<script src="/_js/site.js" type="text/javascript"></script>
		<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		
	</body>
</html>