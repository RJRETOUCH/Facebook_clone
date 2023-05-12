// DropDown Menu
var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height")
}

// Dark theme
var darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

else if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else {
    localStorage.setItem("theme", "light");
}


// Load More button
var btn = document.getElementById("btn");
function onOut() {
    btn.style.background = "";
    btn.style.color = "";
}

function onHOver() {
    btn.style.background = "#717171";
    btn.style.color = "black";
}
btn.addEventListener("mouseover", onHOver);
btn.addEventListener("mouseout", onOut);

// For Image border

var imgBorder = document.getElementById("img-border");
function imgOnOut() {
    btn.style.border = ""
}
function imgOnHOver() {
    btn.style.border = "1px soild black"
}

imgBorder.addEventListener("mouseover", imgOnHOver);
imgBorder.addEventListener("mouseout", imgOnOut);










