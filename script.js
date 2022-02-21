console.log("page loaded...");

var vid = document.getElementById("myVideo");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}
function muteVid() {
    vid.muted=true;
}
function unmuteVid() {
    vid.muted=false;
}
function over(element) {
    element.style.backgroundColor = "#B950FF";    
}
    
function out(element) {
    element.style.backgroundColor = "silver";   
}

function mouseVid() {
    vid.play();
    vid.muted=false;
}
function mouseoutVid() {
    vid.pause();
    vid.muted=false;
}