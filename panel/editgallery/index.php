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
	    <title>Fabrica | Edit Gallery</title>
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
			<h2 id='headline'>
				Select a gallery to edit.
			</h2>
			<br/>
		
			<?php

			function addImages($table, $entry_id, $gallery_id){
				// dynamically add new image upload fields
				echo "<form action='' method='post' enctype='multipart/form-data' name='galleryform'>";
				echo "<input type='hidden' name='table' value='{$table}' />";
				echo "<input type='hidden' name='entry_id' value='{$entry_id}' />";
				echo "<input type='hidden' name='gallery_id' value='{$gallery_id}' />";
				echo "<b>Images:</b><br/>";
				echo "<div id='images'></div>";
				echo "<input type='hidden' name='imagecount' id='imagecount' value='0'>";
				echo "<a href='javascript:addImage();'>Add an image</a><br/><br/>";
				echo "<input type='submit' value='Save'><br/><br/>";
				echo "</form>";
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
				echo "<input type='hidden' name='entry_id' value='{$id}' />";
				echo "<input type='hidden' name='gallery_id' value='{$gallery_id}' />";
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
				$id = mysql_real_escape_string($_POST["entry_id"]);
				$gallery_id = mysql_real_escape_string($_POST["gallery_id"]);
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

			function removeImages($table, $entry_id, $gallery_id){
				// TODO: add checkboxes for user to select which images to remove
				fetchGalleryItems($table, $entry_id, $gallery_id);
			}

			function deleteImages($table, $entry_id, $gallery_id){
				// TODO: delete selected images from gallery
				$link = mysql_real_escape_string($_POST["link"]);
				$imagecount = mysql_real_escape_string($_POST["imagecount"]);
				// for each image...
				for($i=1; $i<=$imagecount; $i++){
					// delete the items selected from database and delete image files from storage
				}
				// TODO: loop through remaining items, rename their files and renumber their item_ids
			}

			function editDescription($table, $entry_id, $gallery_id){
				// text areas for editing description text
				$result = mysql_query("SELECT * FROM {$table}_gallery WHERE {$table}_id=$entry_id AND id={$gallery_id}");
				$gallery = mysql_fetch_assoc($result);
				echo "<form action='index.php' method='post' enctype='multipart/form-data'>";
				echo "<input type='hidden' name='entry_id' value='{$entry_id}'>";
				echo "<input type='hidden' name='gallery_id' value='{$gallery_id}'>";
				echo "<input type='hidden' name='table' value='{$table}'>";
				echo "<input type='hidden' name='action' value='savedescription'>";
				echo "<b>Title:</b><br/>";
				echo "<input type='text' name='title' size='38' value='" . htmlentities($gallery['title'], ENT_QUOTES) . "'><br/><br/>";
				echo "<b>Description:</b><br/>";
				echo "<textarea name='description' cols='38' rows='5'>{$gallery['description']}</textarea><br/><br/>";
				echo "<input type='submit' value='Save'>";
				echo "</form>";
			}

			function saveDescription($table, $entry_id, $gallery_id){
				// save edited title and description
				$title = mysql_real_escape_string($_POST["title"]);
				$description = mysql_real_escape_string($_POST["description"]);
				mysql_query("UPDATE {$table}_gallery SET title='{$title}', description='{$description}' WHERE id='{$gallery_id}' AND {$table}_id='{$entry_id}'");
				if($table == "project"){
					$result = mysql_query("SELECT link FROM project WHERE id='{$entry_id}'");
					$row = mysql_fetch_assoc($result);
					echo "Description saved. See the gallery on it's <a href='/projects/{$row['link']}'>project page</a>.";
				} else if($table == "news"){
					$result = mysql_query("SELECT link FROM news WHERE id='{$entry_id}'");
					$row = mysql_fetch_assoc($result);
					echo "Description saved. See the gallery on it's <a href='/news/{$row['link']}'>news page</a>.";
				}
			}

			function fetchAllGalleries($table){
				// fetch everything for the projects page
      			$result = mysql_query("SELECT {$table}_gallery.id as gallery_id,{$table}_gallery.title as gallery_title,{$table}.id,{$table}.title,{$table}_gallery_item.thumb FROM {$table}_gallery INNER JOIN {$table} ON {$table}_gallery.{$table}_id={$table}.id INNER JOIN {$table}_gallery_item ON {$table}_gallery.id={$table}_gallery_item.gallery_id WHERE {$table}_gallery_item.item_id=1 ORDER BY {$table}_gallery.id DESC");
      			listGalleries($result, $table);
			}

			function fetchGalleryItems($table, $entry_id, $gallery_id){
				// fetch all of the items for this gallery entry
				$result = mysql_query("SELECT * FROM {$table}_gallery_item WHERE {$table}_id=$entry_id AND gallery_id={$gallery_id} ORDER BY item_id ASC");
      			listGalleryItems($result, $table, $entry_id);
			}

			function listGalleries($result, $table){
				// list all galleries returned by the query
				$index = 1;
				while($gallery = mysql_fetch_assoc($result)){
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='?entry_id={$gallery['id']}&gallery_id={$gallery['gallery_id']}&table={$table}'>";
					echo "<img src='{$gallery['thumb']}' class='projectthumb'>";
					echo "<span class='projecttitle'>{$gallery['title']}</span></a>";
					echo "<span class='projecttags'>{$gallery['gallery_title']}</span>";
					echo "</div>";
					$index++;
				}
			}

			function listGalleryItems($result, $table, $entry_id){
				// list all gallery items returned by the query
				echo "<form action='' method='post' enctype='multipart/form-data'>";
				echo "<input type='hidden' name='entry_id' value='{$entry_id}'>";
				echo "<input type='hidden' name='gallery_id' value='{$result['gallery_id']}'>";
				echo "<input type='hidden' name='table' value='{$table}'>";
				echo "<input type='hidden' name='action' value='deleteitems'>";
				$index = 0;
				while($item = mysql_fetch_assoc($result)){
					$index++;
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='{$item['image']}'><img src='{$item['thumb']}' class='projectthumb'></a>";
					echo "<input type='checkbox' name='delete' value='{$item['item_id']}'>";
					echo "</div>";
				}
				echo "<input type='hidden' name='imagecount' value='{$index}'>";
				echo "<div style='clear: both;'>";
				echo "<input type='submit' value='Delete Selected Items' style='background-color:#aa0000'>";
				echo "</form></div>";
			}

			function printgalleryDetails($table, $entry_id, $gallery_id){
				// print forms with title and description
				$result = mysql_query("SELECT * FROM {$table}_gallery WHERE {$table}_id=$entry_id AND id={$gallery_id}");
				$gallery = mysql_fetch_assoc($result);
				echo "<b>Gallery Title:</b><br/>";
				echo "<input type='text' name='title' size='38' value='" . htmlentities($gallery['title'], ENT_QUOTES) . "'><br/><br/>";
				echo "<b>Gallery Description:</b><br/>";
				echo "<textarea name='description' cols='38' rows='10'>{$gallery['description']}</textarea><br/><br/>";
			}


			
			if(isset($_SESSION["loggedin"]) && $_SESSION["position"] == "admin"){
				if(isset($_POST["action"])){
					// STEP 5: inact the changes the user has specified.
					$table = mysql_real_escape_string($_POST["table"]);
					$entry_id = mysql_real_escape_string($_POST["entry_id"]);
					$gallery_id = mysql_real_escape_string($_POST["gallery_id"]);

					if($_POST["action"] == "savedescription"){
						saveDescription($table, $entry_id, $gallery_id);
					} else if($_POST["action"] == "deleteitems"){
						deleteImages($table, $entry_id, $gallery_id);
					}
				} else if(isset($_GET["action"])){
					// STEP 4: route to function user has selected
					$table = mysql_real_escape_string($_GET["table"]);
					$entry_id = mysql_real_escape_string($_GET["entry_id"]);
					$gallery_id = mysql_real_escape_string($_GET["gallery_id"]);

					if($_GET["action"] == "editdescription"){
						editDescription($table, $entry_id, $gallery_id);
					} else if($_GET["action"] == "removeimages"){
						removeImages($table, $entry_id, $gallery_id);
					} else if($_GET["action"] == "addimages"){
						addImages($table, $entry_id, $gallery_id);
					}
				} else if(isset($_GET["gallery_id"])){
					// STEP 3: present edit options for individual gallery
					$table = mysql_real_escape_string($_GET["table"]);
					$entry_id = mysql_real_escape_string($_GET["entry_id"]);
					$gallery_id = mysql_real_escape_string($_GET["gallery_id"]);

					echo "<div class='quarters' style='text-align: center;'>";
					echo "<a href='?table={$table}&entry_id={$entry_id}&gallery_id={$gallery_id}&action=editdescription'><img src='/_images/edit_description.png' class='projectthumb'><br/><br/>Edit Description</a><br/><br/>";
					echo "</div>";
					echo "<div class='quarters' style='text-align: center;'>";
					echo "<a href='?table={$table}&entry_id={$entry_id}&gallery_id={$gallery_id}&action=addimages'><img src='/_images/add_image.png' class='projectthumb'><br/><br/>Add Images</a><br/><br/>";
					echo "</div>";
					echo "<div class='quarters' style='text-align: center; margin-right: 0px;'>";
					echo "<a href='?table={$table}&entry_id={$entry_id}&gallery_id={$gallery_id}&action=removeimages'><img src='/_images/delete_images.png' class='projectthumb'><br/><br/>Remove Images</a><br/><br/>";
					echo "</div>";
				} else if(isset($_GET["table"])){
					// STEP 2: list all gallery entries related to that table
					fetchAllGalleries(mysql_real_escape_string($_GET["table"]));
				} else {
					// STEP 1: choose between project galleries or news galleries
					echo "<div class='quarters' style='text-align: center;'>";
					echo "<a href='?table=project'><img src='/_images/project_gallery.png' class='projectthumb'><br/><br/>Projects</a><br/><br/>";
					echo "</div>";
					echo "<div class='quarters' style='text-align: center;'>";
					echo "<a href='?table=news'><img src='/_images/news_gallery.png' class='projectthumb'><br/><br/>News</a><br/><br/>";
					echo "</div>";
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