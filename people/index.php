<?php

ini_set('display_errors', 'On');

/* TODO: user agent checking to switch values based on screen resolution. */

// connect to the database
include("../_php/connect.php");
include("../_php/login.php");

/* TODO: check for sessions/cookies to see if user is logged in. */

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>FABRICA | People</title>
		<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
		<meta name="KEYWORDS" content="fabrica, benetton, visual communication, design, photography, interactive, video, music, fabricanti, colors magazine" />
		<meta name="DESCRIPTION" content="Applied Arts and Communications Research Center" />
		<link rel="stylesheet" type="text/css" href="../_css/site.css" />
	</head>
	
	<body>
		
		<?php
		include("../_php/slideshow.php");
		include("../_php/menu.php");
		include("../_php/posts.php");
		include("../_php/footer.php");
		?>
		
	</body>
</html>