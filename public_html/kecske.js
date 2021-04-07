window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {

for (var i = 0; i < $("aside img").length; i++) {
    $("#csonak div").style.backgroundImage ="kepek/csonak.png";
    }for (var i = 0; i < $("aside img").length; i++) {

        $("aside img")[i].addEventListener("click", feladat1);
    }
    for (var i = 0; i < $("aside img").length; i++) {
        $("aside img")[i].addEventListener("click", feladat2);
    }
    
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

   
var tomb = {};

function feladat1() {
    tomb.push(this.src);
    consol.log(tomb);
}

function feladat2() {
    display:none;
    for (var i = 0; i < max; i++) {
        
    }
}
