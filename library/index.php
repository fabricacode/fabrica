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
	    <title>Fabrica | Library</title>
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
        <script src="/_js/other.js" type="text/javascript"></script>
	</head>
	
	<body class='black'>

		<?php

		include("../_html/header.html");

		?>

		<div class='page black'>
			<h1 id='headline'>
				Library
			</h1>
			<br/>

			<div class='studioinfo'>
          		<div class='studioleft'>
          			Fabrica's library is hosted in a sort of spiral driven into the ground, which is illuminated from above. It holds over 5,000 volumes on graphic design, photography, industrial design, art, topics related to visual communication, a collection of correlated reference books as well as a vast collection of international periodicals, over 300 audio CDs covering world music and over 400 video tapes and DVDs. The material is catalogued by title, author and subject.<br/>
          			<br/>
          			<b>Access</b><br/>
          			<br/>
          			All those who work at Fabrica can use the library, from Monday to Friday, from 9 am to 2 pm. All external consultations are welcome, on-site access by appointment only:<br/>
					e-mail: <a href="nmelito@fabrica.it">nmelito@fabrica.it</a><br/>
					tel: +39 0422 516222<br/>
					fax: +39 0422 609088<br/>
					<br/>
					<b>Book Search</b><br/>
					<br/>
					<script language="JavaScript" src="/_js/librarysearch.js" type="text/javascript"></script>
					<script>
						function searchScript(e) {
						    if (e.keyCode == 13) {
						        var tb = document.getElementById("searchentry");
						        librarysearch();
						        return false;
						    }
						}
					</script>
					<form name="s" id="librarysearch">
					    <input type="radio" checked="" name="stype" value="title"> title &nbsp;&nbsp;
					    <input type="radio" name="stype" value="author"> author &nbsp;&nbsp;
					    <input type="radio" name="stype" value="subject"> subject &nbsp;&nbsp;
					    <input type="radio" name="stype" value="keyword"> keyword<br>
					    Search: <input name="search" id="searchentry" value="" class="searchbox" onkeypress="return searchScript(event)"> <a href="javascript:librarysearch();">Submit</a>
					</form>
					<br/><br/>
          		</div>
          		<div class='studioright'>
          			<a href="/_images/library01.jpg">
		        		<img src="/_images/library01.jpg" class="projectthumb">
		        	</a>
		        	<br/><br/>
		        	<div style="float: left; width: 48%; margin-right: 4%">
		        		<a href="/_images/library02.jpg">
			        		<img src="/_images/library02.jpg" class="projectthumb">
			        	</a>
		        	</div>
		        	<div style="float: left; width: 48%;">
		        		<a href="/_images/library03.jpg">
			        		<img src="/_images/library03.jpg" class="projectthumb">
			        	</a>
		        	</div>
		        </div>
          	</div>

          	<?php

			include("../_php/footer.php");

			?>

        </div>
		
	</body>
</html>