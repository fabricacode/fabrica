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
		<script src="/_js/addproject.js" type="text/javascript"></script>
	    <link href="/_css/site.css" media="screen" rel="stylesheet" type="text/css" />
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
				// TODO: dynamically add news images to the gallery
			}

			function removeImages($table, $entry_id, $gallery_id){
				// TODO: add checkboxes for user to select which images to remove
				fetchGalleryItems($table, $entry_id, $gallery_id);
			}

			function editDescription($table, $entry_id, $gallery_id){
				// TODO: text areas for editing description text
				echo "<textarea name='caption{$index}' cols='37' rows='5'>{$item['caption']}</textarea><br/><br/>";
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
				$index = 1;
				while($item = mysql_fetch_assoc($result)){
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='{$item['image']}'><img src='{$item['thumb']}' class='projectthumb'></a>";
					echo "<input type='checkbox' name='delete' value='{$item['item_id']}'>";
					echo "</div>";
					$index++;
				}
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
				if(isset($_GET["action"])){
					// STEP 4: route to function user has selected
					$table = mysql_real_escape_string($_GET["table"]);
					$entry_id = mysql_real_escape_string($_GET["entry_id"]);
					$gallery_id = mysql_real_escape_string($_GET["gallery_id"]);

					if($_GET["action"] == "editdescription"){
						editDescription($table, $entry_id, $gallery_id);
					} else if($_GET["action"] == "addimages"){
						addImages($table, $entry_id, $gallery_id);
					} else if($_GET["action"] == "removeimages"){
						removeImages($table, $entry_id, $gallery_id);
					}
				} else if(isset($_GET["gallery_id"])){
					// STEP 3: present edit options for individual gallery
					$table = mysql_real_escape_string($_GET["table"]);
					$entry_id = mysql_real_escape_string($_GET["entry_id"]);
					$gallery_id = mysql_real_escape_string($_GET["gallery_id"]);

					echo "<div class='thirds' style='text-align: center;'>";
					echo "<a href='?table={$table}&entry_id={$entry_id}&gallery_id={$gallery_id}&action=editdescription'>Edit Description</a>";
					echo "</div>";
					echo "<div class='thirds' style='text-align: center;'>";
					echo "<a href='?table={$table}&entry_id={$entry_id}&gallery_id={$gallery_id}&action=addimages'>Add Images</a>";
					echo "</div>";
					echo "<div class='thirds' style='text-align: center; margin-right: 0px;'>";
					echo "<a href='?table={$table}&entry_id={$entry_id}&gallery_id={$gallery_id}&action=removeimages'>Remove Images</a>";
					echo "</div>";

					// echo "<form action='' method='post' enctype='multipart/form-data' name='galleryform'>";
					// printGalleryDetails(mysql_real_escape_string($_GET["table"]), mysql_real_escape_string($_GET["entry_id"]), mysql_real_escape_string($_GET["gallery_id"]));
					// fetchGalleryItems(mysql_real_escape_string($_GET["table"]), mysql_real_escape_string($_GET["entry_id"]), mysql_real_escape_string($_GET["gallery_id"]));
					// TODO: add ability to add new images
					// echo "<div style='clear: both; float: left;'><input type='submit' value='Save'></form></div>";
					// echo "<div style='float: left; margin-left: 20px;'>";
					// echo "<form action='' method='post' enctype='multipart/form-data'>";
					// echo "<input type='hidden' name='project_id' value='{$_GET["entry_id"]}'>";
					// echo "<input type='hidden' name='gallery_id' value='{$_GET["gallery_id"]}'>";
					// echo "<input type='hidden' name='table' value='{$_GET["table"]}'>";
					// echo "<input type='hidden' name='action' value='deletegallery'>";
					// echo "<input type='submit' value='Delete Gallery' style='background-color:#aa0000'>";
					// echo "</div>";
				} else if(isset($_GET["table"])){
					// STEP 2: list all gallery entries related to that table
					fetchAllGalleries(mysql_real_escape_string($_GET["table"]));
				} else {
					// STEP 1: choose between project galleries or news galleries
					echo "<div class='studioleft' style='text-align: center;'>";
					echo "<a href='?table=project'>PROJECTS</a>";
					echo "</div>";
					echo "<div class='studioright' style='text-align: center;'>";
					echo "<a href='?table=news'>NEWS</a>";
					echo "</div>";
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