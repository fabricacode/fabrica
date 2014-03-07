<?php

session_start();

// submitting login credentials
if(isset($_POST["login"])){

	// check database for username and password combination
	$name = mysql_real_escape_string($_POST["username"]);
	$pass = md5(mysql_real_escape_string($_POST["password"]));
	$query = mysql_query("SELECT * FROM person WHERE username = '{$name}' AND password = '{$pass}'");
	
	// successful match
	if(mysql_num_rows($query) > 0){
		
		// set session variables
		$row = mysql_fetch_assoc($query);
		$_SESSION["loggedin"] = "YES";
		$_SESSION["username"] = $name;
		$_SESSION["person_id"] = $row["id"];
		$_SESSION["firstname"] = $row["firstname"];
		$_SESSION["lastname"] = $row["lastname"];
		$_SESSION["position"] = $row["position"];
	}

}

// logout of session
if(isset($_POST["logout"])){
	// clear all session variables and destroy session
	session_unset();
	session_destroy();
}

?>