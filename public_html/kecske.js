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
        $("img")[i].addEventListener("click", kepEltuntetesInnen);
        $("img")[i].addEventListener("click", kepEltuntetesInnenCsonak);
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


function feladat1() {
    var tomb = [];
    tomb.push(this.src);
    consol.log(tomb);
}

function kepEltuntetesInnen() {
    $("#bal").classList.add("eltunik");
    $("#csonak").classList.add("megjelenik");

}

function kepEltuntetesInnenCsonak() {
    $("#csonak").classList.add("eltunik");
    $("#jobb").classList.add("megjelenik");
}

