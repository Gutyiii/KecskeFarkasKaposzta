window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {


    for (var i = 0; i < $("aside img").length; i++) {
        $("#csonak div").style.backgroundImage = "kepek/csonak.png";
    }

    for (var i = 0; i < $("aside img").length; i++) {

        $("aside img")[i].addEventListener("click", feladat1);
    }

    for (var i = 0; i < $("aside img").length; i++) {
        $("img")[i].addEventListener("click", kepEltuntetesInnen);
        $("img")[i].addEventListener("click", kepEltunteteseCsonakbol);
    }

    for (var i = 0; i < $("#tartalom1 div p").length; i++) {
        $("#bal p img")[i].addEventListener("mouseon", feladat5);
        $("#bal p img")[i].addEventListener("mouseon", feladat6);
    }
}
function feladat5() {
    this.classlist.add("kiemel");
}
function feladat6() {
    this.classlist.remove("kiemel");
}

function feladat1() {
    var tomb = {};
    tomb.push(this.src);
    consol.log(tomb);
}

function kepEltuntetesInnen() {
    for (var i = 0; i < max; i++) {
        this.style.add("display:none")[i];
        $("#csonak").add(this.img);
    }

}


function kepEltunteteseCsonakbol() {
    for (var i = 0; i < $("img").length; i++) {
        this.style.add("display:none");
        $("#jobb img")[i].style.remove("display:none");
    }
}

