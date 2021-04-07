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
}

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
