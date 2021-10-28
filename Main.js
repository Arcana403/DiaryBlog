window.setInterval(function(){
	var d = new Date();
	var mo=d.getMonth();
	var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var day=d.getDate();
	if(day<10){
		day="0"+day;
	}
	var year=d.getFullYear();
	var h= d.getHours();
	var m= d.getMinutes();
	var s= d.getSeconds();
	if (h<10){
		h="0"+h;
	}
	if (m<10){
		m="0"+m;
	}
	if (s<10){
		s="0"+s;
	}
	document.getElementById("Time").innerHTML=month[mo]+" "+day+", "+year+"  ["+h+":"+m+"<sub>"+s+"</sub>]";
}, 1);