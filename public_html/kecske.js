window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {
    for (var i = 0; i < $("aside img").length; i++) {

        $("aside img")[i].addEventListener("click", feladat1);
    }
    for (var i = 0; i < $("aside img").length; i++) {
        $("img")[i].addEventListener("click", kepEltuntetesInnen);
        $("img")[i].addEventListener("click", kepEltunteteseCsonakbol);
    }

    for (var i = 0; i < $("#bal p img").length; i++) {
        $("#bal p img")[i].addEventListener("mouseover", feladat5);
        $("#bal p img")[i].addEventListener("mouseout", feladat6);
    }
}
function feladat5() {
    this.classList.add("kiemel");
}
function feladat6() {
    this.classList.remove("kiemel");
}



var tomb = {};


function feladat1() {
    var tomb = {};
    tomb.push(this.src);
    consol.log(tomb);
}

function kepEltuntetesInnen() {
    for (var i = 0; i < max; i++) {
        this.style.add("display:none");
        ("article img").style.remove("display:none")
    }
}


function kepEltunteteseCsonakbol() {

}

