/*
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("logo").style.width = "25%";
        document.getElementById("mainTitle").style.fontSize = "5vh";
        document.getElementById("mainTitle").style.color = "black";
    } else {
        document.getElementById("logo").style.width = "55%";
        document.getElementById("mainTitle").style.fontSize = "7vw";
        document.getElementById("mainTitle").style.color = "grey";

    }
}*/
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (window.innerWidth > 756) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("logo").style.width = "20vw";
        } else {
            document.getElementById("logo").style.width = "70vw";
        }
    }
}