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

	    <?php

  		if(isset($_GET["username"])){
  			// fetch person data based on URL
  			$result = mysql_query("SELECT * FROM person WHERE username = '" . mysql_real_escape_string($_GET["username"]) . "'");
  			$person = mysql_fetch_assoc($result);
  			if(isset($person['firstname'])){
	  			echo "<title>Fabrica | {$person['firstname']} {$person['lastname']}</title>";
	  		} else {
	  			echo "<title>Fabrica | People</title>";
	  		}
	  	} else if(isset($_GET["area"])){
	  		// list people from this area
	  		echo "<title>Fabrica | " . mysql_real_escape_string($_GET["area"]) . "</title>";
  		} else if(isset($_GET["country"])){
  			echo "<title>Fabrica | " . mysql_real_escape_string($_GET["country"]) . "</title>";
  		} else {
  			// list people
  			echo "<title>Fabrica | People</title>";
  		}

  		?>
	    
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
	    <link href="/_css/lightbox.css" rel="stylesheet" />
	    <script src="/_js/other.js" type="text/javascript"></script>
		<script src="/_js/lightbox-2.6.min.js"></script>
	</head>
	
	<body class='black'>

		<?php

		include("../_html/header.html");

		?>

		<div class='page black'>
			<h2 id='headline'>
				<?php

				if(isset($person["firstname"])){
					echo "{$person['firstname']} {$person['lastname']}";
				} else if(isset($_GET["area"])){
					echo "the people of " . mysql_real_escape_string($_GET["area"]);
				} else if(isset($_GET["country"])){
					echo "the people of " . mysql_real_escape_string($_GET["country"]);
				} else {
					echo "the people who work here come from around the world.";
				}
				
				?>
			</h2>

      		<?php

      		function listPeople($result){
      			// list all people returned by the query
				$index = 1;
				while($person = mysql_fetch_assoc($result)){
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='/people/{$person['username']}'>";
					echo "<img src='{$person['thumb']}' class='projectthumb'>";
					echo "<span class='projecttitle'>{$person['firstname']} {$person['lastname']}</span>";
					echo "</a>";
					echo "<span class='projecttags'>";
					if(isset($person['area'])){
						echo "<a href='/people/area/{$person['area']}'>{$person['area']}</a>";
						if(isset($person['nationality'])){
							echo " - ";
						}
					}
					if(isset($person['nationality'])){
						$country = strtolower($person['nationality']);
						echo "<a href='/people/country/{$country}'>{$country}</a>";
					}
					echo "</span>";
					echo "</div>";
					$index++;
				}
      		}

      		function fetchAllPeople(){
      			// fetch everybody for the people page
      			// FIXME: this doesn't include people who do not have a valid "area_id"
      			$result = mysql_query("SELECT person.id,person.username,person.firstname,person.lastname,person.thumb,person.nationality,area.name as area FROM person INNER JOIN area ON person.area_id=area.id ORDER BY enddate DESC, firstname ASC");
      			listPeople($result);
      		}

      		function fetchAreaPeople($area){
      			// fetch only people from the specified area
      			$result = mysql_query("SELECT id FROM area WHERE name='{$area}'");
      			$row = mysql_fetch_assoc($result);
      			$area_id = $row['id'];
      			$result = mysql_query("SELECT id,username,firstname,lastname,thumb,nationality FROM person WHERE area_id = '{$area_id}' ORDER BY enddate DESC, firstname ASC");
      			listPeople($result);
      		}

      		function fetchCountryPeople($country){
      			// fetch only people from the specified country
      			$result = mysql_query("SELECT person.id,person.username,person.firstname,person.lastname,person.thumb,area.name as area FROM person INNER JOIN area ON person.area_id=area.id WHERE nationality = '{$country}' ORDER BY enddate DESC, firstname ASC");
      			listPeople($result);
      		}

      		function personDetails($person){
      			// TODO: reformat the person details page
      			echo "<div class='studioleft'>";
      			echo "<img class='projectmainimg' src='" . $person["photo"] . "'><br/><br/>";
      			$result = mysql_query("SELECT name FROM area WHERE id='{$person['area_id']}'");
      			$area = mysql_fetch_assoc($result);
      			echo "<b>Area:</b> <a href='/areas/{$area['name']}'>{$area['name']}</a><br/>";
      			echo "<b>Country:</b> <a href='/people/country/{$person['nationality']}'>{$person['nationality']}</a><br/>";
      			echo "<b>Web Site:</b> <a href='{$person['website']}'>{$person['website']}</a><br/><br/>";
      			echo "</div><div class='studioright'>";
      			echo $person["bio"] . "<br/><br/>";
      			echo "</div>";

      			// add social media sharing buttons
				echo "<div id='sharebuttons'>";
				echo "<a target='_new' href='https://www.facebook.com/sharer.php?u=http://www.fabrica.it/people/{$person["username"]}'>";
				echo "<img src='../_images/share_facebook.png' class='sharebutton' />";
				echo "</a>";
				echo "<a target='_new' href='https://twitter.com/intent/tweet?url=http://www.fabrica.it/people/{$person["username"]}'>";
				echo "<img src='../_images/share_twitter.png' class='sharebutton' />";
				echo "</a>";
				echo "<a target='_new' href='http://pinterest.com/pin/create/button/?url=http://www.fabrica.it/people/{$person["username"]}&amp;media=http://www.fabrica.it{$person["photo"]}'>";
				echo "<img src='../_images/share_pinterest.png' class='sharebutton' />";
				echo "</a>";
                echo "</div><br/>";
      		}

      		if(isset($person["firstname"])){
      			personDetails($person);
      		} else if(isset($_GET["area"])){
      			fetchAreaPeople(mysql_real_escape_string($_GET["area"]));
      		} else if(isset($_GET["country"])){
      			fetchCountryPeople(mysql_real_escape_string($_GET["country"]));
      		} else {
      			fetchAllPeople();
      		}
			
			include("../_php/footer.php");

			?>

        </div>

        <script src="/_js/video.js" type="text/javascript"></script>
		
	</body>
</html>