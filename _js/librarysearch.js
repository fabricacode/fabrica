// javascript function// May 06.2003// enrique r grullon <e@co8.com>
<!-- Hide script from old browsers
function librarysearch() {
		var stype = document.s.stype;
	var ssearch = document.s.search.value;
	var query = "";
	if (stype[3].checked){
		query = ssearch
	}
	if (stype[0].checked){
		query = "field+titolo+contain+"+ssearch
	}
	if (stype[1].checked){
		query = "field+cognome+contain+"+ssearch+"+or+field+nome+contain+"+ssearch
	}
	if (stype[2].checked){
		query = "field+soggetto+contain+"+ssearch
	}
	var site = "http://dmz2srv01.benetton.it/fabrica/Library.nsf/";
	//var site = "http://195.223.161.167/fabrica/Library.nsf/";
	var str = site+"lft?SearchView&Query="+query+"&SearchMax=0&SearchOrder=1";
	//alert(str);
        //searchWin = window.open(str,'Results','scrollbars=no,resizable=no,status=no,location=no,toolbar=no,width=650,height=490');
        searchWin = window.open(str,'Results','scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,width=660,height=500');
}
//End hiding script from old browsers -->