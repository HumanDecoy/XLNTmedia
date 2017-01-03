var hamburger = document.getElementById("nav-icon");
var box = document.getElementsByClassName("box");

hamburger.addEventListener("click", hamFunction);

function hamFunction(){
	document.getElementById("nav-icon").classList.toggle("open");
}


function buttonpress(){
	box[0].classList.toggle("active");
}


