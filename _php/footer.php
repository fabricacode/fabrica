<div id="footer">
<hr class="primary">

Copyright © 1994 - 2014 Fabrica S.p.A. all rights reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;VAT n. 01926330265&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

<?php

if(isset($_SESSION["loggedin"])){
	echo "Logged in as " . $_SESSION["firstname"] . ". ";
	echo "<a href='/panel'>Logout</a>";
} else {
	echo "<a href='/panel'>Login</a>";
}

?>

</div>