window.addEventListener("load", init);
function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {
    
    for (var i = 0; i < $("#tartalom1 div p").length; i++) {
    $("#bal  p img")[i].addEventListener("mouseon", feladat5);
      $("#bal p img")[i].addEventListener("mouseon", feladat6);    
    }
}
function feladat5(){
    this.classlist.add("kiemel");
}
function feladat6(){
    this.classlist.remove("kiemel");
}
