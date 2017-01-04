var hamburger = document.getElementById("nav-icon");
var box = document.getElementsByClassName("box");

hamburger.addEventListener("click", hamFunction);

function hamFunction(){
	document.getElementById("nav-icon").classList.toggle("open");
}


function buttonpress(){
	box[0].classList.toggle("active");
}

<<<<<<< HEAD
var slidingHeader = new SlidingHeader({
	element: 'header',
	class: 'scrolled'
});

var buttontrue=false;
function notTrue(){
buttontrue=false;
}
function buttonScroll(){
var button = document.getElementsByClassName("btn-1");
return buttontrue=true
}

// Smooth scroll meny till target
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);

    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    if (buttontrue == false){
    box[0].classList.toggle("active");
    document.getElementById("nav-icon").classList.toggle("open");}
}

=======

>>>>>>> parent of 595c8c3...  Menu smooth scroll between sections and button functions
