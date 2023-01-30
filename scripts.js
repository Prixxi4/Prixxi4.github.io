function opennav() {
    document.getElementById("sidebar").style.width = "200px";
    document.getElementsByTagName("body")[0].style.marginLeft = "200px";
    document.getElementsByClassName("center")[0].style.left = "200px";

}

function closenav() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementsByTagName("body")[0].style.marginLeft = "0px";
    document.getElementsByClassName("center")[0].style.left = "0px";
}