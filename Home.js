function intro(){
	document.getElementById("name").innerHTML=prompt("Enter your name.");
	var d=new Date();
	var t=d.getHours();
	if(t==24){
		document.getElementById("greeting").innerHTML="A wonderful midnight";
	}
	else if(t>=1&&t<=11){
		document.getElementById("greeting").innerHTML="A beautiful morning";
	}
	else if(t==12){
		document.getElementById("greeting").innerHTML="A fine noon";
	}
	else if(t>=13&&t<=17){
		document.getElementById("greeting").innerHTML="A pleasant afternoon";
	}
	else if(t>=18&&t<=24){
		document.getElementById("greeting").innerHTML="A happy evening";
	}
}
var y=2001;
function backYear(){
	if(y>2001){
		y--;
		document.getElementById("picArticle").src="Images/Years/"+y+".png";
		document.getElementById("articles").href="Articles.html#"+y;
	}
}
function forwardYear(){
	if(y<2016){
		y++;
		document.getElementById("picArticle").src="Images/Years/"+y+".png";
		document.getElementById("articles").href="Articles.html#"+y;
	}
}
function slideShow(){
	document.getElementById("picArticle").src="Images/Years/"+y+".gif";
}
function backImage(){
	document.getElementById("picArticle").src="Images/Years/"+y+".png";
}