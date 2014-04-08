<?php

ini_set('display_errors', 'On');

// connect to the database
include("../_php/connect.php");
include("../_php/login.php");

?>

<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<html class='no-js'>
	<head>
	    <meta charset='utf-8'>
	    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>

	    <?php

  		if(isset($_GET["link"])){
  			// fetch project data based on URL
  			$result = mysql_query("SELECT * FROM project WHERE link = '" . mysql_real_escape_string($_GET["link"]) . "'");
  			$project = mysql_fetch_assoc($result);
  			if(isset($project["title"])){
	  			echo "<title>Fabrica | " . $project["title"] . "</title>";
	  		} else {
	  			echo "<title>Fabrica | Projects</title>";
	  		}
	  	} else if(isset($_GET["tag"])){
	  		echo "<title>Fabrica | " . mysql_real_escape_string($_GET["tag"]) . "</title>";
  		} else {
  			// list projects
  			echo "<title>Fabrica | Projects</title>";
  		}

  		if(isset($_GET["offset"])){
  			$offset = mysql_real_escape_string($_GET["offset"]);
  			$result = mysql_query("SELECT COUNT(1) FROM project");
  			$row = mysql_fetch_array($result);
			$total = $row[0];
  		}

  		?>
	    
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
	    <link href="/_css/lightbox.css" rel="stylesheet" />
	    <script src="/_js/other.js" type="text/javascript"></script>
		<script src="/_js/lightbox-2.6.min.js"></script>
	</head>
	
	<body class='black'>

		<?php

		include("../_html/header.html");

		?>

		<div class='page black'>
			<h2 id='headline'>
				<?php

				if(isset($project["title"])){
					echo "<a href='/areas/{$project['area']}' class='areaname' style='margin-bottom:40px;'>" . $project["area"] . "</a><br/><font style='display:block; margin-top: 20px'>" . $project["title"] . "</font>";
				} else if(isset($_GET["tag"])){
					echo "tag: " . mysql_real_escape_string($_GET["tag"]);
				} else {
					echo "we produce projects across a variety of disciplines and mediums.";
				}
				
				?>
			</h2>
			<br/>

      		<?php

      		function listGalleries($result){
      			// list all galleries returned by the query
      			while($gallery = mysql_fetch_assoc($result)){
      				echo "<div class='gallery'>";
      				$galleryresults = mysql_query("SELECT * FROM project_gallery_item WHERE gallery_id = '" . $gallery['id'] . "'");
      				
      				if(!empty($gallery['title'])){
      					echo "<b>{$gallery['title']}</b><br/>";	// print title
      				}
      				if(!empty($gallery['description'])){
      					echo "{$gallery['description']}<br/><br/>";		// print description
      				}

      				// print grid of thumbnails
      				$index = 1;
      				while($item = mysql_fetch_assoc($galleryresults)){
      					if($index % 3 == 0){
							echo "<div class='thirds' style='margin-right: 0px'>";
						} else {
							echo "<div class='thirds'>";
						}
						// make a link that opens a lightbox and shows the image caption
						echo "<a href='{$item['image']}' data-lightbox='gallery_{$gallery['id']}' title='" . htmlentities($item['caption'], ENT_QUOTES) . "'>";
						echo "<img src='{$item['thumb']}' class='projectthumb'></a>";
						echo "</div>";
						$index++;
      				}
      				echo "</div><br/><br/>";
      			}
      		}

      		function listProjects($result){
      			// list all projects returned by the query
				$index = 1;
				$colcount = 1;
				while($project = mysql_fetch_assoc($result)){
					if($colcount == 1){
						echo "<div class='row'>";
					}
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='/projects/" . $project['link'] . "'>";
					echo "<img src='" . $project['mainthumb'] . "' class='projectthumb'>";
					echo "<span class='projecttitle'>" . $project['title'] . "</span>";
					echo "</a>";
					echo "<span class='projecttags'>";
					$tagresults = mysql_query("SELECT tag FROM project_tags WHERE project_id = '" . $project['id'] . "'");
					$numtags = mysql_num_rows($tagresults);
					$tagindex = 0;
					while($tags = mysql_fetch_assoc($tagresults)){
						echo "<a href='/projects/tag/" . $tags['tag'] . "'>" . $tags['tag'] . "</a>";
						$tagindex++;
						if($tagindex < $numtags){
							echo ", ";
						}
					}
					echo "</span>";
					echo "</div>";
					if($colcount == 3){
						echo "</div>";
					}
					$index++;
					$colcount++;
					if($colcount > 3){
						$colcount = 1;
					}
				}
      		}

      		function fetchAllProjects(){
      			// fetch everything for the projects page
      			if(isset($offset)){
      				$result = mysql_query("SELECT id,title,link,mainthumb FROM project ORDER BY enddate DESC LIMIT {$offset},24");
      			} else {
      				$result = mysql_query("SELECT id,title,link,mainthumb FROM project ORDER BY enddate DESC LIMIT 24");
      			}
      			listProjects($result);
      		}

      		function fetchAreaProjects($area){
      			// fetch only projects from the specified area
      			$result = mysql_query("SELECT id,title,link,mainthumb FROM project WHERE area = '{$area}' ORDER BY enddate DESC LIMIT 24");
      			listProjects($result);
      		}

      		function fetchAreaProjectsExcept($area, $id){
      			$result = mysql_query("SELECT id,title,link,mainthumb FROM project WHERE area = '{$area}' AND id <> '{$id}' ORDER BY enddate DESC LIMIT 12");
      			listProjects($result);
      		}

      		function fetchTaggedProjects($tag){
      			// TODO: grab project_id's from project_tags table based on tag value.
      			$result = mysql_query("SELECT project.id,project.title,project.link,project.mainthumb FROM project INNER JOIN project_tags ON project.id = project_tags.project_id WHERE project_tags.tag = '{$tag}' ORDER BY enddate DESC LIMIT 24");
      			listProjects($result);
      		}

      		function projectDetails($project){
      			if(!empty($project["subtitle"])){
      				echo "<font class='projectsubtitle'>" . $project["subtitle"] . "</font><br/><br/>";
      			}
      			echo "<img class='projectmainimg' src='" . $project["mainimage"] . "'><br/><br/>";
      			echo $project["bodytext"] . "<br/><br/>";
      			// TODO: build gallery(s)

      			// check if video exists, and if so add it
      			if(!empty($project["videocode"])){
      				echo $project["videocode"] . "<br/><br/>";
      			}

      			// check if additional photos and captions exist, and if so add them
      			$galleryresults = mysql_query("SELECT * FROM project_gallery WHERE project_id = '" . $project['id'] . "'");
      			if(mysql_num_rows($galleryresults) > 0){
      				listGalleries($galleryresults);
      			}

      			// check if credits exist, and if so add them
      			$creditsresults = mysql_query("SELECT title,content FROM project_credits WHERE project_id = '" . $project['id'] . "'");
				if(mysql_num_rows($creditsresults) > 0){
					echo "<div id='credits'>";
					while($credit = mysql_fetch_assoc($creditsresults)){
						echo "<span class='credittitle'>" . $credit['title'] . ":</span> " . $credit['content'] . "<br/>";
					}
					echo "</div>";
				}

      			// add social media sharing buttons
				echo "<div id='sharebuttons'>";
				echo "<a target='_new' href='https://www.facebook.com/sharer.php?u=http://www.fabrica.it/projects/{$project["link"]}'>";
				echo "<img src='../_images/share_facebook.png' class='sharebutton' />";
				echo "</a>";
				echo "<a target='_new' href='https://twitter.com/intent/tweet?url=http://www.fabrica.it/projects/{$project["link"]}'>";
				echo "<img src='../_images/share_twitter.png' class='sharebutton' />";
				echo "</a>";
				echo "<a target='_new' href='http://pinterest.com/pin/create/button/?url=http://www.fabrica.it/projects/{$project["link"]}&amp;media=http://www.fabrica.it{$project["mainimage"]}'>";
				echo "<img src='../_images/share_pinterest.png' class='sharebutton' />";
				echo "</a>";
                echo "</div><br/>";

      			// list the other projects from this area
      			echo "<hr class='primary'><br/>";
      			echo "<h2 id='subheadline' style='text-decoration: underline;'>more projects</h2>";
      			fetchAreaProjectsExcept($project["area"], $project["id"]);
      		}

      		if(isset($project["title"])){
      			projectDetails($project);
      		} else if(isset($_GET["tag"])){
      			fetchTaggedProjects(mysql_real_escape_string($_GET["tag"]));
      		} else {
      			fetchAllProjects();
      		}
			
			include("../_php/footer.php");

			?>

        </div>

        <script src="/_js/video.js" type="text/javascript"></script>
		
	</body>
</html>