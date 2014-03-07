<div class="posts">
<div id="postcontainer">

<?php

if(isset($_GET["section"])){

	if($_GET["section"] == "projects"){
		// fetch from "project" table
		$result = mysql_query("SELECT * FROM project ORDER BY id DESC LIMIT 20");
	} elseif($_GET["section"] == "people"){
		// fetch from "person" table
		$result = mysql_query("SELECT * FROM person ORDER BY id DESC LIMIT 20");
	} elseif($_GET["section"] == "partners"){
		// fetch from "partner" table
		$result = mysql_query("SELECT * FROM partner ORDER BY id DESC LIMIT 20");
	} elseif($_GET["section"] == "places"){
		// fetch from "place" table
		$result = mysql_query("SELECT * FROM places ORDER BY id DESC LIMIT 20");
	} elseif($_GET["section"] == "events"){
		// fetch from "event" table
		$result = mysql_query("SELECT * FROM event ORDER BY id DESC LIMIT 20");
	}
	
} else {

	// default to front page social media posts from "post" table.
	$result = mysql_query("SELECT * FROM post WHERE visible = TRUE ORDER BY id DESC LIMIT 20");

	// iterate over every row available in results
	while($post = mysql_fetch_assoc($result)){

		// get the media object associated with this post
		$media_id = $post["media_id"];
		$mediaresult = mysql_query("SELECT * FROM media WHERE id = '{$media_id}'");
		$mediaentry = mysql_fetch_assoc($mediaresult);
		
		// get the person who made this post
		$person_id = $post["person_id"];
		$personresult = mysql_query("SELECT firstname, lastname, username FROM person WHERE id = '{$person_id}'");
		$personentry = mysql_fetch_assoc($personresult);
		
		echo "<div class='post'>\n";
		
		// post media
		echo "<div class='postmedia'>\n";
		if($mediaentry["type"] == "image"){
			echo "<img src='" . $mediaentry["thumb"] . "' border='0' />\n";
		} else {
			// TODO: accommodate for video and audio media types by including a thumbnail image.
		}
		echo "</div>\n";
		
		// post content
		echo "<div class='postcontent'>\n";
		echo $post["content"];
		echo "</div>\n";
		
		// post date and type
		echo "<div class='postdate'>\n";
		$date = date("F d, o", strtotime($post["datetime"]));
		$time = date("H:i", strtotime($post["datetime"]));
		echo $date . " at " . $time . " by <a href='people/" . $personentry["username"] . "'>" . $personentry["firstname"] . " " . $personentry["lastname"] . "</a> from " . ucfirst($post["service"]) . ".";
		echo "</div>\n"; 
		
		echo "</div>\n";
		
	}

}

?>

</div>
</div>