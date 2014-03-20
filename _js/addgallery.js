var imageCount = 0;

function addImage(){
	imageCount++;
	$("#images").append("<input type='file' name='image" + imageCount + "'><br/>");
	$("#imagecount").val(imageCount);
}

function radioClicks(){
	if($(this).val() == "news"){
		// set entries options to those from news table
		setEntries(news);
	} else if($(this).val() == "project"){
		// set entries options to those from project table
		setEntries(project);
	}
}

function setEntries(entries){
	allentries = "";
	for(i=0; i<entries.length; i++){
		allentries += "<option value='" + entries[i][0] + "'>" + entries[i][1] + "</option>";
	}
	$("#entries").html(allentries);
}

$(function(){
    $( "input:radio" ).click( radioClicks );
});