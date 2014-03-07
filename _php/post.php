<?php

// must be logged in to make a post
if(isset($_SESSION['loggedin'])){

	// submitting a post
	if(isset($_POST['post'])){
	
		// allowed extensions, types and size
		$allowedExts = array("jpg", "jpeg", "gif", "png");
		$allowedType = array("image/gif", "image/jpeg", "image/png", "image/pjpeg");
		$allowedSize = 500000;
		
		$ext = end(explode(".", $_FILES["image"]["name"]));
		$type = $_FILES["image"]["type"];
		$size = $_FILES["image"]["size"];
		
		// check if extension, type and size are allowed
		if(in_array($ext, $allowedExts) && in_array($type, $allowedType) && ($size < $allowedSize)){
		
			// make sure there are no errors in the file
			if($_FILES["image"]["error"] > 0){
				//echo "Return Code: " . $_FILES["image"]["error"] . "<br/>";
			} else {
			
				$content = $_POST["content"];
				
				// move temp file to a real location in users directory
				$link = "people/" . $_SESSION["username"] . "/images/" . $_FILES["image"]["name"];
				$thumbdest = "people/" . $_SESSION["username"] . "/images/thumbs/" . $_FILES["image"]["name"];
				move_uploaded_file($_FILES["image"]["tmp_name"], $link);
				
				// generate a thumbnail for this media
				if($ext == "jpg" || $ext == "jpeg"){
					$source_image = imagecreatefromjpeg($link);
				} elseif($ext == "png"){
					$source_image = imagecreatefrompng($link);
				} elseif($ext == "gif"){
					$source_image = imagecreatefromgif($link);
				}
				$width = imagesx($source_image);
				$height = imagesy($source_image);
				make_thumb($source_image, $ext, $width, $height, $thumbdest, 280);
				
				// insert new row into media table
				mysql_query("INSERT INTO media (type, link, thumb, width, height, size) VALUES ('image', '{$link}', '{$thumbdest}', '{$width}', '{$height}', '{$size}')");
				$media_id = mysql_insert_id();
				
				// insert new row into post table
				$person_id = $_SESSION["person_id"];
				mysql_query("INSERT INTO post (person_id, service, link, content, media_id, visible) VALUES ('{$person_id}', 'fabrica', '{$link}', '{$content}', '{$media_id}', TRUE)");
				
			}
		
		}
		
	}

}

function make_thumb($source_image, $ext, $width, $height, $dest, $desired_width) {

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