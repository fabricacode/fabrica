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
				// entries populated by javascript after section has been selected
				echo "<b>Entry:</b><br/>";
				echo "<select name='entries' id='entries'></select><br/><br/>";
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

			function saveGallery(){
				$table = mysql_real_escape_string($_POST["section"]);
				$id = mysql_real_escape_string($_POST["entries"]);
				$title = mysql_real_escape_string($_POST["title"]);
				$description = mysql_real_escape_string($_POST["description"]);
				$gallery_id = 0;
				if($table == "project"){
					mysql_query("INSERT INTO project_gallery (project_id, title, description) VALUES ('{$id}', '{$title}', '{$description}')");
					$gallery_id = mysql_insert_id();
				} else if($table == "news"){
					mysql_query("INSERT INTO news_gallery (news_id, title, description) VALUES ('{$id}', '{$title}', '{$description}')");
					$gallery_id = mysql_insert_id();
				}
				$result = mysql_query("SELECT link FROM {$table} WHERE id='{$id}'");
				$entry = mysql_fetch_assoc($result);
				saveImages($table, $id, $gallery_id, $entry["link"]);
			}

			function saveImages($table, $id, $gallery_id, $link){
				// number of images that were uploaded
				$imagecount = mysql_real_escape_string($_POST["imagecount"]);

				// allowed extensions, types and size
				$allowedExts = array("jpg", "jpeg", "gif", "png");
				$allowedType = array("image/gif", "image/jpeg", "image/png", "image/pjpeg");
				$allowedSize = 500000;

				// print out form code with hidden inputs
				echo "<form action='' method='post'>";
				echo "<input type='hidden' name='table' value='{$table}' />";
				echo "<input type='hidden' name='id' value='{$id}' />";
				echo "<input type='hidden' name='galleryid' value='{$gallery_id}' />";
				echo "<input type='hidden' name='link' value='{$link}' />";
				echo "<input type='hidden' name='imagecount' value='{$imagecount}' />";

				// for each image...
				for($i=1; $i<=$imagecount; $i++){
					// get extension, type and size
					$ext = end(explode(".", $_FILES["image".$i]["name"]));
					$type = $_FILES["image".$i]["type"];
					$size = $_FILES["image".$i]["size"];

					// check if extension, type and size are allowed
					if(in_array($ext, $allowedExts) && in_array($type, $allowedType) && ($size < $allowedSize)){
						// make sure there are no errors in the file
						if($_FILES["image".$i]["error"] > 0){
							echo "Return Code: " . $_FILES["image".$i]["error"] . "<br/>";
						} else {
							// move temp file to a real location in projects directory
							if($table == "project"){
								$dir = "projects/";
							} else {
								$dir = "news/";
							}
							$imagedest = "/_images/" . $dir . $link . "-" . $gallery_id . "-" . $i . "." . $ext;
							$thumbdest = "/_images/" . $dir . "thumbs/" . $link . "-" . $gallery_id . "-" . $i . "." . $ext;
							move_uploaded_file($_FILES["image".$i]["tmp_name"], "../.." . $imagedest);

							// print out image to be selected and corresponding hidden inputs
							echo "<img src='" . $imagedest . "' id='image{$i}'><br/><br/>";
							echo "<input type='hidden' name='filename{$i}' value='{$imagedest}' />";
							echo "<input type='hidden' name='thumbdest{$i}' value='{$thumbdest}' />";
							echo "<input type='hidden' name='ext{$i}' value='{$ext}' />";
							echo "<input type='hidden' name='image{$i}x1' value='' />";
							echo "<input type='hidden' name='image{$i}y1' value='' />";
							echo "<input type='hidden' name='image{$i}x2' value='' />";
							echo "<input type='hidden' name='image{$i}y2' value='' />";
							echo "<b>Caption:</b><br/>";
							echo "<textarea name='caption{$i}' cols='38' rows='10'></textarea><br/><br/>";
						}
					} else if($size >= $allowedSize){
						echo $_FILES["image".$i]["name"] . " is too large. Try again with a different version of the image under 500kb.<br/>";
					} else if(!in_array($type, $allowedType)){
						echo $_FILES["image".$i]["name"] . " is not recognized as a supported format. Try again with a different version of the image that is either a JPG, PNG, or GIF.<br/>";
					}
				}

				// add save button and close form
				echo "<input type='submit' name='submit' value='Save Thumbs' />";
				echo "</form>";

				// start javascript 
				echo "<script type='text/javascript'>$(document).ready(function () {";

				// for each image...
				for($i=1; $i<=$imagecount; $i++){
					// output the javascript to turn each image into a selection area
					echo "$('#image{$i}').imgAreaSelect({
							aspectRatio: '16:9',
							handles: true,
							onSelectEnd: function (img, selection) {
					            $('input[name=\"image{$i}x1\"]').val(selection.x1);
					            $('input[name=\"image{$i}y1\"]').val(selection.y1);
					            $('input[name=\"image{$i}x2\"]').val(selection.x2);
					            $('input[name=\"image{$i}y2\"]').val(selection.y2);            
					        }
						});";
				}

				// end javascript
				echo "});</script>";
			}

			function saveThumbs(){
				// grab general info for this gallery
				$table = mysql_real_escape_string($_POST["table"]);
				$id = mysql_real_escape_string($_POST["id"]);
				$gallery_id = mysql_real_escape_string($_POST["galleryid"]);
				$link = mysql_real_escape_string($_POST["link"]);
				$imagecount = mysql_real_escape_string($_POST["imagecount"]);

				// for each image...
				for($i=1; $i<=$imagecount; $i++){
					// grab filename and selection data
					$filename = mysql_real_escape_string($_POST["filename".$i]);
					$thumbdest = mysql_real_escape_string($_POST["thumbdest".$i]);
					$ext = mysql_real_escape_string($_POST["ext".$i]);
					$x1 = mysql_real_escape_string($_POST["image{$i}x1"]);
					$y1 = mysql_real_escape_string($_POST["image{$i}y1"]);
					$x2 = mysql_real_escape_string($_POST["image{$i}x2"]);
					$y2 = mysql_real_escape_string($_POST["image{$i}y2"]);
					$caption = mysql_real_escape_string($_POST["caption{$i}"]);

					// load image and get dimensions
					if($ext == "jpg" || $ext == "jpeg"){
						$source_image = imagecreatefromjpeg("../.." . $filename);
					} elseif($ext == "png"){
						$source_image = imagecreatefrompng("../.." . $filename);
					} elseif($ext == "gif"){
						$source_image = imagecreatefromgif("../.." . $filename);
					}
					$width = $x2 - $x1;
					$height = $y2 - $y1;

					// copy image with specified coordinates
					$desired_width = 500;	// width based on max page size of 1000px
					$desired_height = 281;	// 16:9 ratio
					$virtual_image = imagecreatetruecolor($desired_width, $desired_height);
					imagecopyresampled($virtual_image, $source_image, 0, 0, $x1, $y1, $desired_width, $desired_height, $width, $height);

					// create the physical thumbnail image to its destination
					if($ext == "jpg" || $ext == "jpeg"){
						imagejpeg($virtual_image, "../.." . $thumbdest, 80);
					} elseif($ext == "png"){
						imagepng($virtual_image, "../.." . $thumbdest, 1);
					} elseif($ext == "gif"){
						imagegif($virtual_image, "../.." . $thumbdest);
					}

					// insert data into database
					if($table == "project"){
						mysql_query("INSERT INTO project_gallery_item (project_id, gallery_id, item_id, thumb, image, caption) VALUES ('{$id}', '{$gallery_id}', {$i}, '{$thumbdest}', '{$filename}', '{$caption}')");
					} else if($table == "news"){
						mysql_query("INSERT INTO news_gallery_item (news_id, gallery_id, item_id, thumb, image, caption) VALUES ('{$id}', '{$gallery_id}', {$i}, '{$thumbdest}', '{$filename}', '{$caption}')");
					}
				}

				if($table == "project"){
					echo "Your gallery was successfully added. You can see it <a href='/projects/{$link}'>here</a>.<br/>";
				} else {
					echo "Your gallery was successfully added. You can see it <a href='/news/{$link}'>here</a>.<br/>";
				}
			}





			
			if(isset($_SESSION["loggedin"]) && $_SESSION["position"] == "admin"){
				if(isset($_POST['table'])){
					// STEP 3: generate the thumbs based on user selections
					saveThumbs();
				} else if(isset($_POST['imagecount'])){
					// STEP 2: upon submitting gallery, prompt user to make thumbnails
					saveGallery();
				} else {
					// STEP 1: print out gallery form
					echo "<script>";
					getEntries("project");
					getEntries("news");
					echo "</script>";
					printForm();
				}
			} else {
				// redirect to the user panel
				header("Location: /panel");
			}

			include("../../_php/footer.php");

			?>

		</div>

	</body>
</html>