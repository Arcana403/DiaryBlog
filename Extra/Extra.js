var a=0;
var l;
function prevAnime(){
	document.getElementById("Hello").style.backgroundColor="#173AFF";
	document.getElementById("Hello").innerHTML="";
	if(a>1){
		a--;
		document.getElementById("picAnime").src="../Images/Extra/"+a+".jpg";
		l="Anime.html#"+a;
		window.open(l, "_self");
	}
	else if(a==1||a==0){
		a=97;
		document.getElementById("picAnime").src="../Images/Extra/"+a+".jpg";
		l="Anime.html#"+a;
		window.open(l, "_self");
	}
}
function nextAnime(){
	document.getElementById("Hello").style.backgroundColor="#173AFF";
	document.getElementById("Hello").innerHTML="";
	if(a<97){
		a++;
		document.getElementById("picAnime").src="../Images/Extra/"+a+".jpg";
		l="Anime.html#"+a;
		window.open(l, "_self");
	}
	else if(a==97){
		a=1;
		document.getElementById("picAnime").src="../Images/Extra/"+a+".jpg";
		l="Anime.html#"+a;
		window.open(l, "_self");
	}
}