x = window.matchMedia("(max-width: 600px)")

function openNav() {
	if (x.matches) { 
		document.getElementById("mySidenav").style.width = "100%";

	}else{
		document.getElementById("mySidenav").style.width = "250px";

	}
}


function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

