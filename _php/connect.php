<?php
	// connect to the database
	$db = mysql_connect('localhost', 'fabweb', 'fabweb') or
		die('Failed to connect to server');

	mysql_select_db('fabrica') or
		die('Failed to select database');
?>
