function startImage(){
	var z=document.URL;
	if(z.match("2001")){
		x=0;
	}
	else if(z.match("2002")){
		x=16;
	}
	else if(z.match("2003")){
		x=30;
	}
	else if(z.match("2004")){
		x=42;
	}
	else if(z.match("2005")){
		x=53;
	}
	else if(z.match("2006")){
		x=70;
	}
	else if(z.match("2007")){
		x=86;
	}
	else if(z.match("2008")){
		x=106;
	}
	else if(z.match("2009")){
		x=124;
	}
	else if(z.match("2010")){
		x=134;
	}
	else if(z.match("2011")){
		x=147;
	}
	else if(z.match("2012")){
		x=156;
	}
	else if(z.match("2013")){
		x=166;
	}
	else if(z.match("2014")){
		x=227;
	}
	else if(z.match("2015")){
		x=236;
	}
	else if(z.match("2016")){
		x=245;
	}
	document.getElementById("articleImage").src="Images/Images/"+x+".jpg";
}
function prevImage(){
	if(x>0){
		x--;
		document.getElementById("articleImage").src="Images/Images/"+x+".jpg";
	}
	else{
		x=253;
		document.getElementById("articleImage").src="Images/Images/"+x+".jpg";
	}
	if(x==15){
		window.open("Articles.html#2001", "_self");
	}
	else if(x==29){
		window.open("Articles.html#2002", "_self");
	}
	else if(x==41){
		window.open("Articles.html#2003", "_self");
	}
	else if(x==52){
		window.open("Articles.html#2004", "_self");
	}
	else if(x==69){
		window.open("Articles.html#2005", "_self");
	}
	else if(x==85){
		window.open("Articles.html#2006", "_self");
	}
	else if(x==105){
		window.open("Articles.html#2007", "_self");
	}
	else if(x==123){
		window.open("Articles.html#2008", "_self");
	}
	else if(x==133){
		window.open("Articles.html#2009", "_self");
	}
	else if(x==146){
		window.open("Articles.html#2010", "_self");
	}
	else if(x==155){
		window.open("Articles.html#2011", "_self");
	}
	else if(x==165){
		window.open("Articles.html#2012", "_self");
	}
	else if(x==226){
		window.open("Articles.html#2013", "_self");
	}
	else if(x==235){
		window.open("Articles.html#2014", "_self");
	}
	else if(x==244){
		window.open("Articles.html#2015", "_self");
	}
	else if(x==253){
		window.open("Articles.html#2016", "_self");
	}
}
function nextImage(){
	if(x<253){
		x++;
		document.getElementById("articleImage").src="Images/Images/"+x+".jpg";
	}
	else{
		x=0;
		document.getElementById("articleImage").src="Images/Images/"+x+".jpg";
	}
	if(x==0){
		window.open("Articles.html#2001", "_self");
	}
	else if(x==16){
		window.open("Articles.html#2002", "_self");
	}
	else if(x==30){
		window.open("Articles.html#2003", "_self");
	}
	else if(x==42){
		window.open("Articles.html#2004", "_self");
	}
	else if(x==53){
		window.open("Articles.html#2005", "_self");
	}
	else if(x==70){
		window.open("Articles.html#2006", "_self");
	}
	else if(x==86){
		window.open("Articles.html#2007", "_self");
	}
	else if(x==106){
		window.open("Articles.html#2008", "_self");
	}
	else if(x==124){
		window.open("Articles.html#2009", "_self");
	}
	else if(x==134){
		window.open("Articles.html#2010", "_self");
	}
	else if(x==147){
		window.open("Articles.html#2011", "_self");
	}
	else if(x==156){
		window.open("Articles.html#2012", "_self");
	}
	else if(x==166){
		window.open("Articles.html#2013", "_self");
	}
	else if(x==227){
		window.open("Articles.html#2014", "_self");
	}
	else if(x==236){
		window.open("Articles.html#2015", "_self");
	}
	else if(x==245){
		window.open("Articles.html#2016", "_self");
	}
}