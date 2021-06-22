const themeButton = document.getElementById("theme-button");
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");

themeButton.addEventListener("click", event => {
    if (themeButton.src.match("light-solid")) {
        themeButton.src = "../resources/img/light.png";
        document.body.style.background = "#fff";
        navbar.style.background = "#14274E";
        logo.style.color = "#fff";
    }
    else {
        themeButton.src = "../resources/img/light-solid.png";
        document.body.style.background = "#fff";
        navbar.style.background = "#4A69BB";
    }
});