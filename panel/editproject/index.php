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
	    <title>Fabrica | Edit Project</title>
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
				Select a project to edit.
			</h2>
			<br/>
		
			<?php

			function listProjects($result){
      			// list all projects returned by the query
				$index = 1;
				while($project = mysql_fetch_assoc($result)){
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='?id=" . $project['id'] . "'>";
					echo "<img src='" . $project['mainthumb'] . "' class='projectthumb'>";
					echo "<span class='projecttitle'>" . $project['title'] . "</span></a>";
					echo "<span class='projecttags'>" . date("F j, Y", strtotime($project['enddate'])) . "</span>";
					echo "</div>";
					$index++;
				}
      		}

      		function printProjectForm($project){
      			echo "<form action='' method='post' enctype='multipart/form-data'>";
      			echo "<input type='hidden' name='id' value='{$project['id']}'>";
				echo "<b>Title:</b><br/>";
				echo "<input type='text' name='title' size='38' value='{$project['title']}'><br/><br/>";
				echo "<b>Subtitle:</b><br/>";
				echo "<input type='text' name='subtitle' size='38' value='{$project['subtitle']}'><br/><br/>";
				echo "<b>Link:</b><br/>";
				echo "<input type='text' name='link' size='38' value='{$project['link']}'><br/><br/>";
				echo "<b>Area:</b><br/>";
				echo "<input type='text' name='area' size='38' value='{$project['area']}'><br/><br/>";
				echo "<b>Body Text:</b><br/>";
				echo "<textarea name='bodytext' cols='38' rows='10'>{$project['bodytext']}</textarea><br/><br/>";
				echo "<b>Main Image:</b><br/>";
				echo "<img src='" . $project['mainthumb'] . "' width='320'><br/>";
				echo "<input type='file' name='mainimage'><br/><br/>";
				echo "<b>Video Embed Code:</b><br/>";
				echo "<textarea name='videocode' cols='38' rows='5'>{$project['videocode']}</textarea><br/><br/>";
				printCredits($project['id']);
				echo "<div style='float:left;'>";
				echo "<input type='submit' value='Save'></div>";
				echo "</form>";
				echo "<div style='float:left; margin-left: 50px'>";
				echo "<form action='' method='post' enctype='multipart/form-data'>";
				echo "<input type='hidden' name='id' value='{$project['id']}'>";
				echo "<input type='hidden' name='delete' value='delete'>";
				echo "<input type='submit' value='Delete' style='background-color:#aa0000'><br/><br/>";
				echo "</form></div>";
      		}

      		function printCredits($id){
      			$result = mysql_query("SELECT * FROM project_credits WHERE project_id = '" . $id . "'");
      			$creditcount = mysql_num_rows($result);
      			echo "<script>creditCount = " . $creditcount . ";</script>";
      			if($creditcount > 0){
      				echo "<b>Credits:</b><br/>";
      				echo "<div id='addcredits'>";
      				echo "<table><tr><td width='100'>Title:</td><td>Content:</td></tr></table>";
      				while($credit = mysql_fetch_assoc($result)){
      					echo "<input type='text' name='credittitle" . $creditcount . "' size='10' style='margin-bottom:5px;' value='{$credit['title']}'> ";
      					echo "<input type='text' name='creditcontent" . $creditcount . "' size='26' value='{$credit['content']}'><br/>";
      				}
      				echo "</div>";
					echo "<input type='hidden' name='creditcount' id='creditcount' value='{$creditcount}'>";
					echo "<a href='javascript:addCredit();''>Add a credit</a><br/><br/>";
      			}
      			// TODO: add the ability to add new credit fields
      		}

      		function deleteProject($id){
      			mysql_query("DELETE FROM project WHERE id='{$id}'");
      			mysql_query("DELETE FROM project_tags WHERE project_id='{$id}'");
      			echo "Project deleted. <a href='/panel/editproject/'>Go back to project editing panel.</a>";
      		}

      		function saveProject(){
      			$id = mysql_real_escape_string($_POST['id']);
      			$title = mysql_real_escape_string($_POST['title']);
      			$subtitle = mysql_real_escape_string($_POST['subtitle']);
      			$link = mysql_real_escape_string($_POST['link']);
      			$bodytext = mysql_real_escape_string($_POST['bodytext']);
      			$videocode = mysql_real_escape_string($_POST['videocode']);
      			$creditcount = mysql_real_escape_string($_POST["creditcount"]);

      			mysql_query("UPDATE project SET title='{$title}', subtitle='{$subtitle}', link='{$link}', bodytext='{$bodytext}', videocode='{$videocode}' WHERE id='{$id}'");

      			if($creditcount > 0){
					for($i=1; $i <= $creditcount; $i++){
						if(!empty($_POST["credittitle".$i])){
							$title = mysql_real_escape_string($_POST["credittitle".$i]);
							$content = mysql_real_escape_string($_POST["creditcontent".$i]);
							$credit_id = $i;
							// check if project_id + credit_id exist, and if so, update that entry
							$result = mysql_query("SELECT * FROM project_credits WHERE project_id='{$id}' AND credit_id='{$credit_id}'");
							if(mysql_num_rows($result) > 0){
								mysql_query("UPDATE project_credits SET title='{$title}', content='{$content}' WHERE project_id='{$id}' AND credit_id='{$credit_id}'");
							} else {
								// if not, insert a new entry into the able
								mysql_query("INSERT INTO project_credits (project_id, credit_id, title, content) VALUES ('{$id}', '{$credit_id}', '{$title}', '{$content}')");
							}
						}
					}
				}

				// // insert credits referencing project_id
				// if(isset($credits)){
				// 	foreach($credits as $title => $content){
				// 		mysql_query("INSERT INTO project_credits (project_id, title, content) VALUES ('{$project_id}', '{$title}', '{$content}')");
				// 	}
				// }

      			updateImage($link);

      			echo "Project saved! You can see it <a href='/projects/" . $link . "'>here</a>";
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
							$imagedest = "/_images/projects/" . $link . "." . $ext;
							$thumbdest = "/_images/projects/thumbs/" . $link . "." . $ext;
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
					} else if($size >= $allowedSize){
						echo "The image you are trying to upload is too large. Hit the \"back\" button in your browser and try again with a different version of the image under 500kb.<br/>";
					} else if(!in_array($type, $allowedType)){
						echo "The image you are trying to upload is not recognized as a supported format. Hit the \"back\" button in your browser and try again with a different version of the image that is either a JPG, PNG, or GIF.";
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

      		function fetchAllProjects(){
      			// fetch everything for the projects page
      			$result = mysql_query("SELECT id,title,mainthumb,enddate FROM project ORDER BY enddate DESC");
      			listProjects($result);
      		}

      		function fetchProject($id){
      			// fetch project with specified id
      			$result = mysql_query("SELECT * FROM project WHERE id = '" . $id . "'");
      			$project = mysql_fetch_assoc($result);
      			printProjectForm($project);
      		}
			
			if(isset($_SESSION["loggedin"]) && $_SESSION["position"] == "admin"){
				if(isset($_POST["id"])){
					if(isset($_POST["delete"])){
						deleteProject($_POST["id"]);
					} else {
						// update data in the database and process image if it's included
						saveProject();
					}
				} else if(isset($_GET["id"])){
					// load form with data from news entry with this id
					fetchProject(mysql_real_escape_string($_GET["id"]));
				} else {
					// list all news entries
					fetchAllProjects();
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