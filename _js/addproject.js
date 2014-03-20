var creditCount = 0;

function addCredit(){
	if(creditCount == 0){
		$("#addcredits").append("<table><tr><td width='100'>Title:</td><td>Content:</td></tr></table>");
	}
	creditCount++;
	$("#addcredits").append("<input type='text' name='credittitle" + creditCount + "' size='10' style='margin-bottom:5px;'> <input type='text' name='creditcontent" + creditCount + "' size='26'><br/>");
	$("#creditcount").val(creditCount);
}