<?php

// must be logged in to make a post
if(isset($_SESSION['loggedin'])){
	
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
		
			$title = $_POST["title"];
			$subtitle = $_POST["subtitle"];
			$link = $_POST["link"];
			$bodytext = $_POST["bodytext"];
			
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
			
			// insert new row into news table
			mysql_query("INSERT INTO news (title, subtitle, bodytext, mainthumb, mainimage, link) VALUES ('{$title}', '{$subtitle}', '{$bodytext}', '{$thumbdest}', '{$imagedest}', '{$link}')");
			
			echo "<b>News Successfully Added!</b><br/><br/>See your post <a href='/news/" . $link . "'>here</a>.<br/>";
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

?>