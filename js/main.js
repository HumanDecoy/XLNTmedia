var hamburger = document.getElementById("nav-icon");
hamburger.addEventListener("click", hamFunction);

function hamFunction(){
	document.getElementById("nav-icon").classList.toggle("open");
};