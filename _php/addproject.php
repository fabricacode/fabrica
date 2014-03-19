<?php

// must be logged in to make a post
if(isset($_SESSION['loggedin'])){

	if(isset($_POST['thumbdest'])){
		saveThumb();
	} else {
	
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
			
				$title = mysql_real_escape_string($_POST["title"]);
				$subtitle = mysql_real_escape_string($_POST["subtitle"]);
				$link = mysql_real_escape_string($_POST["link"]);
				$area = mysql_real_escape_string($_POST["area"]);
				$startd = mysql_real_escape_string($_POST["startd"]);
				$startm = mysql_real_escape_string($_POST["startm"]);
				$starty = mysql_real_escape_string($_POST["starty"]);
				$startdate = $starty . "-" . $startm . "-" . $startd;
				$endd = mysql_real_escape_string($_POST["endd"]);
				$endm = mysql_real_escape_string($_POST["endm"]);
				$endy = mysql_real_escape_string($_POST["endy"]);
				$enddate = $endy . "-" . $endm . "-" . $endd;
				$bodytext = mysql_real_escape_string(nl2br($_POST["bodytext"]));
				$tags = trim(mysql_real_escape_string($_POST["tags"]));
				$videocode = mysql_real_escape_string($_POST["videocode"]);
				$creditcount = mysql_real_escape_string($_POST["creditcount"]);

				if($creditcount > 0){
					$credits = array();
					for($i=0; $i <= $creditcount; $i++){
						if(!empty($_POST["credittitle".$i])){
							$credits[mysql_real_escape_string($_POST["credittitle".$i])] = mysql_real_escape_string($_POST["creditcontent".$i]);
						}
					}
				}

				if(strpos($tags, ",") !== false){
					$taglist = explode(",", $tags);
				}
				
				// move temp file to a real location in news directory
				$imagedest = "/_images/projects/" . $link . "." . $ext;
				$thumbdest = "/_images/projects/thumbs/" . $link . "." . $ext;
				move_uploaded_file($_FILES["mainimage"]["tmp_name"], "../.." . $imagedest);
				
				// generate a thumbnail for this media
				// if($ext == "jpg" || $ext == "jpeg"){
				// 	$source_image = imagecreatefromjpeg("../.." . $imagedest);
				// } elseif($ext == "png"){
				// 	$source_image = imagecreatefrompng("../.." . $imagedest);
				// } elseif($ext == "gif"){
				// 	$source_image = imagecreatefromgif("../.." . $imagedest);
				// }
				// $width = imagesx($source_image);
				// $height = imagesy($source_image);
				// make_thumb($source_image, $ext, $width, $height, "../.." . $thumbdest, 900);
				
				// insert new row into news table
				mysql_query("INSERT INTO project (title, subtitle, startdate, enddate, bodytext, mainthumb, mainimage, link, area, videocode) VALUES ('{$title}', '{$subtitle}', '{$startdate}', '{$enddate}', '{$bodytext}', '{$thumbdest}', '{$imagedest}', '{$link}', '{$area}', '{$videocode}')");
				$project_id = mysql_insert_id();

				// insert tags referencing project_id
				if(isset($taglist)){
					foreach($taglist as $tag){
						$tag = trim($tag);
						if(strlen($tag) > 0){
							mysql_query("INSERT INTO project_tags (project_id, tag) VALUES ('{$project_id}', '{$tag}')");
						}
					}
				} else if(strlen($tags) > 0){
					// only one tag entered
					mysql_query("INSERT INTO project_tags (project_id, tag) VALUES ('{$project_id}', '{$tags}')");
				}

				// insert credits referencing project_id
				if(isset($credits)){
					foreach($credits as $title => $content){
						mysql_query("INSERT INTO project_credits (project_id, title, content) VALUES ('{$project_id}', '{$title}', '{$content}')");
					}
				}

				selectThumbArea($title, $project_id, "../.." . $imagedest, "../.." . $thumbdest, $ext, $link);
			}
		
		} else if($size >= $allowedSize){
			echo "The image you are trying to upload is too large. Hit the \"back\" button in your browser and try again with a different version of the image under 500kb.<br/>";
		} else if(!in_array($type, $allowedType)){
			echo "The image you are trying to upload is not recognized as a supported format. Hit the \"back\" button in your browser and try again with a different version of the image that is either a JPG, PNG, or GIF.";
		}

	}

}

function selectThumbArea($title, $id, $filename, $thumbdest, $ext, $link){

	echo "<img src='" . $filename . "' id='projectmainimage'>";
	echo "<form action='' method='post'>";
	echo "<input type='hidden' name='title' value='{$title}' />";
	echo "<input type='hidden' name='id' value='{$id}' />";
	echo "<input type='hidden' name='filename' value='{$filename}' />";
	echo "<input type='hidden' name='thumbdest' value='{$thumbdest}' />";
	echo "<input type='hidden' name='ext' value='{$ext}' />";
	echo "<input type='hidden' name='link' value='{$link}' />";
	echo "<input type='hidden' name='x1' value='' />";
	echo "<input type='hidden' name='y1' value='' />";
	echo "<input type='hidden' name='x2' value='' />";
	echo "<input type='hidden' name='y2' value='' />";
	echo "<input type='submit' name='submit' value='Save Thumb' />";
	echo "</form>";

	echo "<script type='text/javascript'>
		$(document).ready(function () {
			$('#projectmainimage').imgAreaSelect({
				aspectRatio: '16:9',
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
	$id = $_POST["id"];
	$filename = $_POST["filename"];
	$thumbdest = $_POST["thumbdest"];
	$link = $_POST["link"];
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
	$desired_width = 900;	// arbitrary width based on monitor size
	$desired_height = 506;	// 16:9 ratio
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

	echo "<b>Project Successfully Added!</b><br/><br/>See the project page <a href='/projects/" . $link . "'>here</a>.<br/>";
	//echo "<b>Project Successfully Added!</b><br/><br/>See it on the <a href='/projects/'>projects page</a>.<br/>";
}

function make_thumb($source_image, $ext, $width, $height, $dest, $desired_width) {
	// TODO: constrain to a prespecified aspect ratio to fit thumbnail with projects page grid of image links.
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