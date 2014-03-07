<?php

function process_application(){
	$allowedExts = array("pdf", "zip");
	$tempCV = explode(".", $_FILES["cv"]["name"]);
	$tempPortfolio = explode(".", $_FILES["portfolio"]["name"]);
	$extensionCV = strtolower(end($tempCV));
	$extensionPortfolio = strtolower(end($tempPortfolio));

	if((($_FILES["cv"]["type"] == "application/pdf") || ($_FILES["cv"]["type"] == "application/zip")) && in_array($extensionCV, $allowedExts)){
		if($_FILES["cv"]["size"] < 10000000){
			if((($_FILES["portfolio"]["type"] == "application/pdf") || ($_FILES["portfolio"]["type"] == "application/zip")) && in_array($extensionPortfolio, $allowedExts)){
				if($_FILES["portfolio"]["size"] < 10000000){
					if (($_FILES["cv"]["error"] == 0) && ($_FILES["portfolio"]["error"] == 0)){

						// both files are good!
						save_application($extensionCV, $extensionPortfolio);

					} else {
						echo "Return Code for curriculum vitae: " . $_FILES["cv"]["error"] . "<br/>";
						echo "Return Code for potfolio: " . $_FILES["portfolio"]["error"] . "<br/>";
					}
				} else {
					echo "Your portfolio must be less than 10mb in size. The file you attempted to upload is " . $_FILES["cv"]["size"] . "<br/>";
				}
			} else {
				echo "Your portfolio must be a PDF or in a zip file.<br/>";
			}
		} else {
			echo "Your curriculum vitae must be less than 10mb in size. The file you attempted to upload is " . $_FILES["cv"]["size"] . "<br/>";
		}
	} else {
		echo "Your curriculum vitae must be a PDF or in a zip file.<br/>";
	}
}

function save_application($extensionCV, $extensionPortfolio){
	$firstname = test_input($_POST["firstname"]);
	$lastname = test_input($_POST["lastname"]);
	$email = test_input($_POST["email"]);
	$dobd = test_input($_POST["dobd"]);
	$dobm = test_input($_POST["dobm"]);
	$doby = test_input($_POST["doby"]);
	$dob = $doby . "-" . $dobm . "-" . $dobd;
	$nationality = test_input($_POST["nationality"]);
	$letter = test_input($_POST["letter"]);
	$area = test_input($_POST["area"]);
	$link1 = test_input($_POST["link1"]);
	$link2 = test_input($_POST["link2"]);
	$howdidyouhear = test_input($_POST["howdidyouhear"]);

	// save files
	$cvPath = "../applications/cv/" . strtolower($lastname) . "_" . strtolower($firstname) . "_cv." . $extensionCV;
	$portfolioPath = "../applications/portfolio/" . strtolower($lastname) . "_" . strtolower($firstname) . "_portfolio." . $extensionPortfolio;
	move_uploaded_file($_FILES["cv"]["tmp_name"], $cvPath);
	move_uploaded_file($_FILES["portfolio"]["tmp_name"], $portfolioPath);

	// save application in database
	$sql = mysql_query("INSERT INTO application (firstname, lastname, dob, country, email, area, letter, portfolio, cv, link1, link2, howdidyouhear) VALUES ('$firstname', '$lastname', '$dob', '$nationality', '$email', '$area', '$letter', '$portfolioPath', '$cvPath', '$link1', '$link2', '$howdidyouhear')");

	echo "<h1>Thank you for applying to Fabrica!</h1>Your application has been received and will be reviewed by admissions personnel as soon as possible. It may be a few weeks before we get back to you.<br/>";

	// echo $firstname . "<br/>";
	// echo $lastname . "<br/>";
	// echo $email . "<br/>";
	// echo $dob . "<br/>";
	// echo $nationality . "<br/>";
	// echo $letter . "<br/>";
	// echo $area . "<br/>";
	// echo "<a href='" . $cvPath . "'>cv</a><br/>";
	// echo "<a href='" . $portfolioPath . "'>portfolio</a><br/>";
	// echo $link1 . "<br/>";
	// echo $link2 . "<br/>";
	// echo $howdidyouhear . "<br/>";
}

function test_input($data){
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  $data = mysql_real_escape_string($data);
  return $data;
}

// process application
process_application();

?>