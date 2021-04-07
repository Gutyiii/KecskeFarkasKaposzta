window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

function init() {
    $("#csonak div").style.backgoundImage ="kepek/csonak.png";
    for (var i = 0; i < $("aside img").length; i++) {
        $("aside img")[i].addEventListener("click", feladat1);
    }
    for (var i = 0; i < $("aside img").length; i++) {
        $("aside img")[i].addEventListener("click", feladat2);
    }
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

