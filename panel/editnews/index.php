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
	    <title>Fabrica | Edit News</title>
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
				Select a news entry to edit.
			</h2>
			<br/>
		
			<?php

			function listNews($result){
      			// list all projects returned by the query
				$index = 1;
				while($news = mysql_fetch_assoc($result)){
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='?id=" . $news['id'] . "'>";
					echo "<img src='" . $news['mainthumb'] . "' class='projectthumb'>";
					echo "<span class='projecttitle'>" . $news['title'] . "</span></a>";
					echo "<span class='projecttags'>" . date("F j, Y", strtotime($news['dt'])) . "</span>";
					echo "</div>";
					$index++;
				}
      		}

      		function printNewsForm($news){
      			echo "<form action='' method='post' enctype='multipart/form-data'>";
      			echo "<input type='hidden' name='id' value='{$news['id']}'>";
				echo "<b>Title:</b><br/>";
				echo "<input type='text' name='title' size='38' value='{$news['title']}'><br/><br/>";
				echo "<b>Subtitle:</b><br/>";
				echo "<input type='text' name='subtitle' size='38' value='{$news['subtitle']}'><br/><br/>";
				echo "<b>Link:</b><br/>";
				echo "<input type='text' name='link' size='38' value='{$news['link']}'><br/><br/>";
				echo "<b>Body Text:</b><br/>";
				echo "<textarea name='bodytext' cols='38' rows='10'>{$news['bodytext']}</textarea><br/><br/>";
				echo "<b>Main Image:</b><br/>";
				echo "<img src='" . $news['mainthumb'] . "' width='320'><br/>";
				echo "<input type='file' name='mainimage'><br/><br/>";
				echo "<b>Video Embed Code:</b><br/>";
				echo "<textarea name='videocode' cols='38' rows='5'>{$news['videocode']}</textarea><br/><br/>";
				echo "<div style='float:left;'>";
				echo "<input type='submit' value='Save'></div>";
				echo "</form>";
				echo "<div style='float:left; margin-left: 50px'>";
				echo "<form action='' method='post' enctype='multipart/form-data'>";
				echo "<input type='hidden' name='id' value='{$news['id']}'>";
				echo "<input type='hidden' name='delete' value='delete'>";
				echo "<input type='submit' value='Delete' style='background-color:#aa0000'><br/><br/>";
				echo "</form></div>";
      		}

      		function deleteNews($id){
      			mysql_query("DELETE FROM news WHERE id='{$id}'");
      			mysql_query("DELETE FROM news_tags WHERE news_id='{$id}'");
      			echo "News entry deleted. <a href='/panel/editnews/'>Go back to news editing panel.</a>";
      		}

      		function saveNews(){
      			$id = mysql_real_escape_string($_POST['id']);
      			$title = mysql_real_escape_string($_POST['title']);
      			$subtitle = mysql_real_escape_string($_POST['subtitle']);
      			$link = mysql_real_escape_string($_POST['link']);
      			$bodytext = mysql_real_escape_string($_POST['bodytext']);
      			$videocode = mysql_real_escape_string($_POST['videocode']);
      			mysql_query("UPDATE news SET title='{$title}', subtitle='{$subtitle}', link='{$link}', bodytext='{$bodytext}', videocode='{$videocode}' WHERE id='{$id}'");
      			updateImage($link);

      			echo "News entry saved! You can see it <a href='/news/" . $link . "'>here</a>";
      		}

      		function updateImage($link){
      			if(!empty($_FILES["mainimage"]["name"])){
      				// allowed extensions, types and size
					$allowedExts = array("jpg", "jpeg", "gif", "png");
					$allowedType = array("image/gif", "image/jpeg", "image/png", "image/pjpeg");
					$allowedSize = 500000;
					
					$ext = end(explode(".", $_FILES["mainimage"]["name"]));
					$type = $_FILES["mainimage"]["type"];
					$size = $_FILES["mainimage"]["size"];
					// check if extension, type and size are allowed
					if(in_array($ext, $allowedExts) && in_array($type, $allowedType) && ($size < $allowedSize)){
						// make sure there are no errors in the file
						if($_FILES["mainimage"]["error"] > 0){
							//echo "Return Code: " . $_FILES["image"]["error"] . "<br/>";
						} else {
							// move temp file to a real location in news directory
							$imagedest = "/_images/news/" . $link . "." . $ext;
							$thumbdest = "/_images/news/thumbs/" . $link . "." . $ext;
							move_uploaded_file($_FILES["mainimage"]["tmp_name"], "../.." . $imagedest);
							
							// generate a thumbnail for this media
							if($ext == "jpg" || $ext == "jpeg"){
								$source_image = imagecreatefromjpeg("../.." . $imagedest);
							} elseif($ext == "png"){
								$source_image = imagecreatefrompng("../.." . $imagedest);
							} elseif($ext == "gif"){
								$source_image = imagecreatefromgif("../.." . $imagedest);
							}
							$width = imagesx($source_image);
							$height = imagesy($source_image);
							make_thumb($source_image, $ext, $width, $height, "../.." . $thumbdest, 900);
						}
					}
      			}
      		}

      		function make_thumb($source_image, $ext, $width, $height, $dest, $desired_width) {
				// TODO: constrain to a prespecified aspect ratio to fit thumbnail with front page grid of image links.
				// find the "desired height" of this thumbnail, relative to the desired width
				$desired_height = floor($height * ($desired_width / $width));
				// create a new, "virtual" image
				$virtual_image = imagecreatetruecolor($desired_width, $desired_height);
				// copy source image at a resized size
				imagecopyresampled($virtual_image, $source_image, 0, 0, 0, 0, $desired_width, $desired_height, $width, $height);
				// create the physical thumbnail image to its destination
				if($ext == "jpg" || $ext == "jpeg"){
					imagejpeg($virtual_image, $dest, 80);
				} elseif($ext == "png"){
					imagepng($virtual_image, $dest, 1);
				} elseif($ext == "gif"){
					imagegif($virtual_image, $dest);
				}
			}

      		function fetchAllNews(){
      			// fetch everything for the news page
      			$result = mysql_query("SELECT id,title,mainthumb,dt FROM news ORDER BY dt DESC");
      			listNews($result);
      		}

      		function fetchNewsEntry($id){
      			// fetch news entry with specified id
      			$result = mysql_query("SELECT * FROM news WHERE id = '" . $id . "'");
      			$news = mysql_fetch_assoc($result);
      			printNewsForm($news);
      		}
			
			if(isset($_SESSION["loggedin"]) && $_SESSION["position"] == "admin"){
				if(isset($_POST["id"])){
					if(isset($_POST["delete"])){
						deleteNews($_POST["id"]);
					} else {
						// update data in the database and process image if it's included
						saveNews();
					}
				} else if(isset($_GET["id"])){
					// load form with data from news entry with this id
					fetchNewsEntry(mysql_real_escape_string($_GET["id"]));
				} else {
					// list all news entries
					fetchAllNews();
				}
			} else {
				// redirect to the user panel
				header("Location: /panel");
			}

			include("../../_php/footer.php");

			?>

		</div>

		<script src="/_js/other.js" type="text/javascript"></script>

	</body>
</html>