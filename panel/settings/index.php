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
	    <title>Fabrica | User Settings</title>
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
		<script type="text/javascript" src="/_js/jquery.imgareaselect.pack.js"></script>
	</head>
	
	<body class='black'>

		<?php

		include("../../_html/header.html");

		?>

		<div class='page black'>
			<h2 id='headline'>
				User Settings				
			</h1>
			<hr class='primary'><br/>
		
			<?php

			function printUserInfo(){
				$query = mysql_query("SELECT * FROM person WHERE id = '{$_SESSION['person_id']}'");
				$person = mysql_fetch_assoc($query);
				echo "<div class='thirds' style='overflow: hidden;'>";
				echo "<form name='usersettings' action='' method='post' enctype='multipart/form-data'>";
				echo "<input type='hidden' name='action' value='save'>";
				echo "<input type='hidden' name='id' value='{$_SESSION['person_id']}'>";

				// TODO: show users profile photo and give option to upload a different one
				echo "<b>First Name:</b><br/><input type='text' size='38' name='firstname' value='{$person['firstname']}'><br/><br/>";
				echo "<b>Last Name:</b><br/><input type='text' size='38' name='lastname' value='{$person['lastname']}'><br/><br/>";
				echo "<b>Username:</b><br/><input type='text' size='38' name='username' value='{$person['username']}'><br/><br/>";
				echo "<b>Password:</b><br/><input type='password' size='38' name='password' value='{$person['password']}'><br/><br/>";
				
				// look up area by id and switch to drop down menu
				echo "<b>Area:</b><br/>";//<input type='text' size='38' name='area_id' value='{$person['area_id']}'><br/><br/>";
				echo "<select id='area_id' name='area_id'>";
				echo "<option "; if($person['area_id'] == 1){echo "selected='selected'";} echo " value='1'> Social Engagement Campaigns<br/>";
				echo "<option "; if($person['area_id'] == 2){echo "selected='selected'";} echo " value='2'> COLORS Magazine<br/>";
				echo "<option "; if($person['area_id'] == 3){echo "selected='selected'";} echo " value='3'> Design<br/>";
				echo "<option "; if($person['area_id'] == 4){echo "selected='selected'";} echo " value='4'> Editorial<br/>";
				echo "</select><br/><br/>";
				
				echo "<b>Nationality:</b><br/><input type='text' size='38' name='nationality' value='{$person['nationality']}'><br/><br/>";
				echo "<b>Date of Birth:</b><br/><input type='text' size='38' name='dob' value='{$person['dob']}'><br/><br/>";
				echo "<b>Start Date:</b><br/><input type='text' size='38' name='startdate' value='{$person['startdate']}'><br/><br/>";
				echo "<b>End Date:</b><br/><input type='text' size='38' name='enddate' value='{$person['enddate']}'><br/><br/>";
				
				echo "<b>Position:</b><br/><input type='text' size='38' name='position' value='{$person['position']}'><br/><br/>";
				echo "<b>Biography:</b><br/><textarea name='bio' cols='38' rows='10'>{$person['bio']}</textarea><br/><br/>";
				echo "<b>Address:</b><br/><input type='text' size='38' name='address' value='{$person['address']}'><br/><br/>";
				echo "<b>Office Phone:</b><br/><input type='text' size='38' name='officephone' value='{$person['officephone']}'><br/><br/>";
				echo "<b>Cell Phone:</b><br/><input type='text' size='38' name='cellphone' value='{$person['cellphone']}'><br/><br/>";
				echo "<b>Web Site:</b><br/><input type='text' size='38' name='website' value='{$person['website']}'><br/><br/>";
				echo "<b>E-mail Address:</b><br/><input type='text' size='38' name='email' value='{$person['email']}'><br/><br/>";
				echo "</div>";
				echo "<div class='thirds'>";
				echo "<a href='{$person['photo']}'><img src='{$person['thumb']}' class='projectthumb'></a>";
				echo "<b>Change your profile photo:</b> (max 500kb)<br/>";
				echo "<input type='file' name='photo'><br/><br/>";
				echo "</div>";
				echo "<div class='thirds' style='margin-right: 0px'>";
				echo "<input type='submit' value='Save'>";
				echo "</form>";
				echo "</div>";
			}

			function saveUserInfo(){
				$id = mysql_real_escape_string($_POST['id']);
				$firstname = mysql_real_escape_string($_POST['firstname']);
				$lastname = mysql_real_escape_string($_POST['lastname']);
				$username = mysql_real_escape_string($_POST['username']);
				$password = mysql_real_escape_string($_POST['password']);
				// check if password has changed from MD5 string, otherwise MD5() it and save.
				$query = mysql_query("SELECT password FROM person WHERE id={$id}");
				$user = mysql_fetch_assoc($query);
				if($user['password'] != $password){
					$password = md5($password);
				}
				$area_id = mysql_real_escape_string($_POST['area_id']);
				$nationality = mysql_real_escape_string($_POST['nationality']);
				$dob = mysql_real_escape_string($_POST['dob']);
				$startdate = mysql_real_escape_string($_POST['startdate']);
				$enddate = mysql_real_escape_string($_POST['enddate']);
				$position = mysql_real_escape_string($_POST['position']);
				$bio = mysql_real_escape_string($_POST['bio']);
				$address = mysql_real_escape_string($_POST['address']);
				$officephone = mysql_real_escape_string($_POST['officephone']);
				$cellphone = mysql_real_escape_string($_POST['cellphone']);
				$website = mysql_real_escape_string($_POST['website']);
				$email = mysql_real_escape_string($_POST['email']);

				$query = mysql_query("UPDATE person SET firstname='{$firstname}', lastname='{$lastname}', username='{$username}', password='{$password}', area_id='{$area_id}', nationality='{$nationality}', dob='{$dob}', startdate='{$startdate}', enddate='{$enddate}', position='{$position}', bio='{$bio}', address='{$address}', officephone='{$officephone}', cellphone='{$cellphone}', website='{$website}', email='{$email}' WHERE id='{$id}'");
				
				// see if a new photo has been uploaded, and if so save it.
				updatePhoto($username);	
			}

			function updatePhoto($username){
				if(!empty($_FILES["photo"]["name"])){
					// allowed extensions, types and size
					$allowedExts = array("jpg", "jpeg", "gif", "png");
					$allowedType = array("image/gif", "image/jpeg", "image/png", "image/pjpeg");
					$allowedSize = 500000;
					
					$ext = end(explode(".", $_FILES["photo"]["name"]));
					$type = $_FILES["photo"]["type"];
					$size = $_FILES["photo"]["size"];
					// check if extension, type and size are allowed
					if(in_array($ext, $allowedExts) && in_array($type, $allowedType) && ($size < $allowedSize)){
						// make sure there are no errors in the file
						if($_FILES["photo"]["error"] > 0){
							//echo "Return Code: " . $_FILES["image"]["error"] . "<br/>";
						} else {
							// move temp file to a real location in news directory
							$imagedest = "/_images/people/" . $username . "." . $ext;
							$thumbdest = "/_images/people/thumbs/" . $username . "." . $ext;
							move_uploaded_file($_FILES["photo"]["tmp_name"], "../.." . $imagedest);
							// prompt user to select the thumbnail area for the image
							selectThumbArea($username, "../.." . $imagedest, "../.." . $thumbdest, $ext);
							// update photo and thumb entries
							$query = mysql_query("UPDATE person SET photo='{$imagedest}', thumb='{$thumbdest}' WHERE username='{$username}'");
						}
					}
				}
			}

			function selectThumbArea($username, $filename, $thumbdest, $ext){
				echo "<img src='" . $filename . "' id='projectmainimage'>";
				echo "<form action='' method='post'>";
				echo "<input type='hidden' name='action' value='savephoto' />";
				echo "<input type='hidden' name='username' value='{$username}' />";
				echo "<input type='hidden' name='filename' value='{$filename}' />";
				echo "<input type='hidden' name='thumbdest' value='{$thumbdest}' />";
				echo "<input type='hidden' name='ext' value='{$ext}' />";
				echo "<input type='hidden' name='x1' value='' />";
				echo "<input type='hidden' name='y1' value='' />";
				echo "<input type='hidden' name='x2' value='' />";
				echo "<input type='hidden' name='y2' value='' />";
				echo "<input type='submit' name='submit' value='Save Thumb' />";
				echo "</form>";

				echo "<script type='text/javascript'>
					$(document).ready(function () {
						$('#projectmainimage').imgAreaSelect({
							aspectRatio: '1:1',
							handles: true,
							onSelectEnd: function (img, selection) {
					            $('input[name=\"x1\"]').val(selection.x1);
					            $('input[name=\"y1\"]').val(selection.y1);
					            $('input[name=\"x2\"]').val(selection.x2);
					            $('input[name=\"y2\"]').val(selection.y2);            
					        }
						});
					});
				</script>";

				echo "<br/><br/>";
				echo "Drag your cursor on top of the image to the left to define the area of the image you wish to use for the thumbnail. The thumbnail image must constrain to a 16:9 aspect ratio so that it fits nicely in a grid on each of the projects pages.";
			}

			function saveThumb(){
				// grab crop data for the thumbnail
				$username = $_POST["username"];
				$filename = $_POST["filename"];
				$thumbdest = $_POST["thumbdest"];
				$ext = $_POST["ext"];
				$x1 = $_POST["x1"];
				$y1 = $_POST["y1"];
				$x2 = $_POST["x2"];
				$y2 = $_POST["y2"];

				// load image and get dimensions
				if($ext == "jpg" || $ext == "jpeg"){
					$source_image = imagecreatefromjpeg($filename);
				} elseif($ext == "png"){
					$source_image = imagecreatefrompng($filename);
				} elseif($ext == "gif"){
					$source_image = imagecreatefromgif($filename);
				}
				$width = $x2 - $x1; //imagesx($source_image);
				$height = $y2 - $y1; //imagesy($source_image);

				// copy image with specified coordinates
				$desired_width = 500;	// width based on max page size of 1000px
				$desired_height = 500;	// 1:1 ratio
				$virtual_image = imagecreatetruecolor($desired_width, $desired_height);
				imagecopyresampled($virtual_image, $source_image, 0, 0, $x1, $y1, $desired_width, $desired_height, $width, $height);

				// create the physical thumbnail image to its destination
				if($ext == "jpg" || $ext == "jpeg"){
					imagejpeg($virtual_image, $thumbdest, 80);
				} elseif($ext == "png"){
					imagepng($virtual_image, $thumbdest, 1);
				} elseif($ext == "gif"){
					imagegif($virtual_image, $thumbdest);
				}

				echo "Your user information was successfully saved. You can view it on <a href='/people/{$username}'>your person page</a>.";
			}



			
			if(isset($_SESSION["loggedin"])){
				if(isset($_POST["action"])){
					if($_POST["action"] == "save"){
						saveUserInfo();
					} else if($_POST["action"] == "savephoto"){
						saveThumb();
					}
				} else {
					// show user info and allow them to save
					printUserInfo();
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