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
	    <title>Fabrica | Review Applications</title>
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
			<p class='about'>
		
				<?php

				function printHeader(){
					echo "<tr>";
					echo "<td><b>Date Submitted</b></td>";
					echo "<td><b>Last Name</b></td>";
					echo "<td><b>First Name</b></td>";
					echo "<td><b>DOB</b></td>";
					echo "<td><b>Nationality</b></td>";
					echo "<td><b>Email</b></td>";
					echo "<td><b>Area</b></td>";
					echo "<td><b>Portfolio</b></td>";
					echo "<td><b>CV</b></td>";
					echo "<td><b>Link #1</b></td>";
					echo "<td><b>Link #2</b></td>";
					echo "<td><b>Processed</b></td>";
					echo "<td><b>Date Processed</b></td>";
					echo "<td><b>Processed By</b></td>";
					echo "<td><b>Status</b></td>";
					echo "<td><b>Functions</b></td>";
					echo "</tr>";
				}

				function printRow($app){
					echo "<tr>";
					echo "<td>" . $app["datesubmitted"] . "</td>";
					echo "<td>" . $app["lastname"] . "</td>";
					echo "<td>" . $app["firstname"] . "</td>";
					echo "<td>" . $app["dob"] . "</td>";
					echo "<td>" . $app["country"] . "</td>";
					echo "<td>" . "<a href='mailto:" . $app["email"] . "'>" . $app["email"] . "</a>" . "</td>";
					echo "<td>" . $app["area"] . "</td>";
					echo "<td>" . "<a href='" . $app["portfolio"] . "'>PORTFOLIO</a>" . "</td>";
					echo "<td>" . "<a href='" . $app["cv"] . "'>CV</a>" . "</td>";
					echo "<td>" . "<a href='" . $app["link1"] . "'>" . $app["link1"] . "</a>" . "</td>";
					echo "<td>" . "<a href='" . $app["link2"] . "'>" . $app["link2"] . "</a>" . "</td>";
					if($app["processed"] > 0){
						echo "<td>Yes</td>";
						echo "<td>" . $app["dateprocessed"] . "</td>";
						echo "<td>" . $app["processedby"] . "</td>";
						if($app["acceptedtrial"] > 0){
							echo "<td>Accepted</td>";
						} else {
							echo "<td>Rejected</td>";
						}
						echo "<td>";
						echo "<table><tr><td>";
						echo "<form name='accept' action='' method='post'>";
						echo "<input type='hidden' name='status' value='accept'>";
						echo "<input type='hidden' name='id' value='" . $app["id"] . "'>";
						echo "<input type='hidden' name='processedby' value='" . $_SESSION["username"] . "'>";
						echo "<input type='submit' class='accept' value='Accept'>";
						echo "</form>";
						echo "</td><td>";
						echo "<form name='reject' action='' method='post'>";
						echo "<input type='hidden' name='status' value='reject'>";
						echo "<input type='hidden' name='id' value='" . $app["id"] . "'>";
						echo "<input type='hidden' name='processedby' value='" . $_SESSION["username"] . "'>";
						echo "<input type='submit' class='reject' value='Reject'>";
						echo "</form>";
						echo "</td></tr></table>";
						echo "</td>";
					} else {
						echo "<td>No</td>";
						echo "<td>" . "</td>";
						echo "<td>" . "</td>";
						echo "<td>Pending</td>";
						echo "<td>";
						echo "<table><tr><td>";
						echo "<form name='accept' action='' method='post'>";
						echo "<input type='hidden' name='status' value='accept'>";
						echo "<input type='hidden' name='id' value='" . $app["id"] . "'>";
						echo "<input type='hidden' name='processedby' value='" . $_SESSION["username"] . "'>";
						echo "<input type='submit' class='accept' value='Accept'>";
						echo "</form>";
						echo "</td><td>";
						echo "<form name='reject' action='' method='post'>";
						echo "<input type='hidden' name='status' value='reject'>";
						echo "<input type='hidden' name='id' value='" . $app["id"] . "'>";
						echo "<input type='hidden' name='processedby' value='" . $_SESSION["username"] . "'>";
						echo "<input type='submit' class='reject' value='Reject'>";
						echo "</form>";
						echo "</td></tr></table>";
						echo "</td>";
					}
					echo "</tr>";
				}
				
				if(isset($_SESSION["loggedin"]) && $_SESSION["position"] == "admin"){

					if(isset($_POST["status"])){
						// update entry with the new status of the application
						if($_POST["status"] == "accept"){
							mysql_query("UPDATE application SET processed='1', acceptedtrial='1', processedby='" . mysql_real_escape_string($_POST["processedby"]) . "', dateprocessed=NOW() WHERE id=" . mysql_real_escape_string($_POST["id"]));
						} else if($_POST["status"] == "reject") {
							mysql_query("UPDATE application SET processed='1', acceptedtrial='0', processedby='" . mysql_real_escape_string($_POST["processedby"]) . "', dateprocessed=NOW() WHERE id=" . mysql_real_escape_string($_POST["id"]));
						}
					}

					// get all applications
					$result = mysql_query("SELECT * FROM application ORDER BY id DESC");

					// print headers for fields
					echo "<table border='1' width='100%'>";
					printHeader();

					// print out each application entry
					while($app = mysql_fetch_assoc($result)){
						printRow($app);
					}
					echo "</table>";
				} else {
					// redirect to the user panel
					header("Location: /panel");
				}

				?>

			</p>

			<?php

			include("../_php/footer.php");

			?>

		</div>

		<script src="/_js/other.js" type="text/javascript"></script>

	</body>
</html>