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
  			$result = mysql_query("SELECT * FROM news WHERE link = '" . mysql_real_escape_string($_GET["link"]) . "'");
  			$news = mysql_fetch_assoc($result);
  			if(isset($news["title"])){
	  			echo "<title>Fabrica | " . $news["title"] . "</title>";
	  		} else {
	  			echo "<title>Fabrica | News</title>";
	  		}
	  	} else if(isset($_GET["tag"])){
	  		echo "<title>Fabrica | " . mysql_real_escape_string($_GET["tag"]) . "</title>";
  		} else {
  			// list projects
  			echo "<title>Fabrica | News</title>";
  		}

  		if(isset($_GET["offset"])){
  			$offset = mysql_real_escape_string($_GET["offset"]);
  			$result = mysql_query("SELECT COUNT(1) FROM news");
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
	</head>
	
	<body class='black'>

		<?php

		include("../_html/header.html");

		?>

		<div class='page black'>
			<h2 id='headline'>
				<?php

				if(isset($news["title"])){
					echo $news["title"];
				} else if(isset($_GET["tag"])){
					echo "tag: " . mysql_real_escape_string($_GET["tag"]);
				} else {
					echo "These are the latest updates about what Fabrica is doing around the world.";
				}
				
				?>
			</h2>
			<br/>

      		<?php

      		function listGalleries($result){
      			// list all galleries returned by the query
      			while($gallery = mysql_fetch_assoc($result)){
      				echo "<div>";
      				$galleryresults = mysql_query("SELECT * FROM news_gallery_item WHERE gallery_id = '" . $gallery['id'] . "'");
      				
      				echo "<b>{$gallery['title']}</b><br/><br/>";	// print title
      				echo "{$gallery['description']}<br/><br/>";		// print description

      				// print grid of thumbnails
      				$index = 1;
      				while($item = mysql_fetch_assoc($galleryresults)){
      					if($index % 3 == 0){
							echo "<div class='thirds' style='margin-right: 0px'>";
						} else {
							echo "<div class='thirds'>";
						}
						// TODO: make a link that opens a lightbox and shows the image caption
						echo "<a href='{$item['image']}'><img src='{$item['thumb']}' class='projectthumb'></a>";
						echo "</div>";
						$index++;
      				}
      				echo "</div><br/><br/>";
      			}
      		}

      		function listNews($result){
      			// list all projects returned by the query
				$index = 1;
				while($news = mysql_fetch_assoc($result)){
					if($index % 3 == 0){
						echo "<div class='thirds' style='margin-right: 0px'>";
					} else {
						echo "<div class='thirds'>";
					}
					echo "<a href='/news/" . $news['link'] . "'>";
					echo "<img src='" . $news['mainthumb'] . "' class='projectthumb'>";
					echo "<span class='projecttitle'>" . $news['title'] . "</span>";
					echo "</a>";
					echo "<span class='projecttags'>";
					echo date("F j, Y", strtotime($news['dt']));
					// $tagresults = mysql_query("SELECT tag FROM news_tags WHERE news_id = '" . $news['id'] . "'");
					// $numtags = mysql_num_rows($tagresults);
					// $tagindex = 0;
					// while($tags = mysql_fetch_assoc($tagresults)){
					// 	echo "<a href='/news/tag/" . $tags['tag'] . "'>" . $tags['tag'] . "</a>";
					// 	$tagindex++;
					// 	if($tagindex < $numtags){
					// 		echo ", ";
					// 	}
					// }
					echo "</span>";
					echo "</div>";
					$index++;
				}
      		}

      		function fetchAllNews(){
      			// fetch everything for the news page
      			if(isset($offset)){
					$result = mysql_query("SELECT id,title,link,mainthumb,dt FROM news ORDER BY dt DESC LIMIT {$offset},24");
      			} else {
      				$result = mysql_query("SELECT id,title,link,mainthumb,dt FROM news ORDER BY dt DESC LIMIT 24");
      			}
      			listNews($result);
      		}

      		function fetchAllNewsExcept($id){
      			$result = mysql_query("SELECT id,title,link,mainthumb,dt FROM news WHERE id <> '{$id}' ORDER BY dt DESC LIMIT 12");
      			listNews($result);
      		}

      		function fetchTaggedNews($tag){
      			// TODO: grab project_id's from project_tags table based on tag value.
      			$result = mysql_query("SELECT news.id,news.title,news.link,news.mainthumb FROM news INNER JOIN news_tags ON news.id = news_tags.news_id WHERE news_tags.tag = '{$tag}' ORDER BY dt DESC");
      			listNews($result);
      		}

      		function newsDetails($news){
      			// list news details
      			echo "<font class='projectsubtitle'>" . $news["subtitle"] . "</font><br/><br/>";
      			echo "<img class='projectmainimg' src='" . $news["mainimage"] . "'><br/><br/>";
      			echo "<b>" . date("F j, Y", strtotime($news['dt'])) . "</b><br/><br/>";
      			echo $news["bodytext"] . "<br/><br/>";
      			// TODO: build gallery(s)?

      			// check if video exists, and if so add it
      			if(!empty($news["videocode"])){
      				echo $news["videocode"] . "<br/><br/>";
      			}

      			// check if additional photos and captions exist, and if so add them
      			$galleryresults = mysql_query("SELECT * FROM news_gallery WHERE news_id = '" . $news['id'] . "'");
      			if(mysql_num_rows($galleryresults) > 0){
      				listGalleries($galleryresults);
      			}
      			
      			// add social media sharing buttons
				echo "<div id='sharebuttons'>";
				echo "<a target='_new' href='https://www.facebook.com/sharer.php?u=http://www.fabrica.it/news/{$news["link"]}'>";
				echo "<img src='../_images/share_facebook.png' class='sharebutton' />";
				echo "</a>";
				echo "<a target='_new' href='https://twitter.com/intent/tweet?url=http://www.fabrica.it/news/{$news["link"]}'>";
				echo "<img src='../_images/share_twitter.png' class='sharebutton' />";
				echo "</a>";
				echo "<a target='_new' href='http://pinterest.com/pin/create/button/?url=http://www.fabrica.it/news/{$news["link"]}&amp;media=http://www.fabrica.it{$news["mainimage"]}'>";
				echo "<img src='../_images/share_pinterest.png' class='sharebutton' />";
				echo "</a>";
                echo "</div><br/>";

      			// list the other news
      			echo "<hr class='primary'>";
      			echo "<h2 id='subheadline' style='text-decoration: underline;'>more news</h2>";
      			fetchAllNewsExcept($news["id"]);
      		}

      		if(isset($news["title"])){
      			newsDetails($news);
      		} else if(isset($_GET["tag"])){
      			fetchTaggedNews(mysql_real_escape_string($_GET["tag"]));
      		} else {
      			fetchAllNews();
      		}
			
			include("../_php/footer.php");

			?>

        </div>

        <script src="/_js/other.js" type="text/javascript"></script>
        <script src="/_js/video.js" type="text/javascript"></script>
		
	</body>
</html>