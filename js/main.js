const themeButton = document.getElementById("theme-button"),
    navbar = document.getElementById("navbar"),
    logo = document.getElementById("logo"),
    btnPizza = document.getElementById("btnPizza"),
    btnSorbete = document.getElementById("btnSorbete"),
    btnHamburguesa = document.getElementById("btnHamburguesa"),
    btnHotDog = document.getElementById("btnHotDog"),
    caloriesText = document.getElementById("calories"),
    text = document.getElementById("p-1"),
    text1 = document.getElementById("p-2"),
    food = document.getElementById("food");

let calories = 0;
let caloriesFood = [600, 278, 300, 240];

const changeSelection = (btn, index) => {
    if (btn.classList.contains("selection-btn")) {
        btn.classList.remove('selection-btn');
        calories -= caloriesFood[index];
    }
    else {
        btn.classList.toggle('selection-btn');
        calories += caloriesFood[index];
    }
    caloriesText.innerHTML = calories;
}

btnHotDog.addEventListener("click", (e) => {
    changeSelection(btnHotDog, 3);
});

btnHamburguesa.addEventListener("click", (e) => {
    changeSelection(btnHamburguesa, 0);
});

btnSorbete.addEventListener("click", (e) => {
    changeSelection(btnSorbete, 1);
});

btnPizza.addEventListener("click", (e) => {
    changeSelection(btnPizza, 2);
});

themeButton.addEventListener("click", (e) => {
    if (themeButton.src.match("light-solid")) {
        themeButton.src = "../resources/img/light.png";
        document.body.style.background = "#1A1A2E";
        navbar.style.background = "#14274E";
        logo.style.color = "#fff";
        text.style.color = "#fff";
        text1.style.color = "#fff";
        caloriesText.style.color = "#fff";
        caloriesText.style.color = "#fff";
        btnHamburguesa.style.backgroundColor = "#fff";
        btnSorbete.style.backgroundColor = "#fff";
        btnPizza.style.backgroundColor = "#fff";
        btnHotDog.style.backgroundColor = "#fff";
    }
    else {
        themeButton.src = "../resources/img/light-solid.png";
        document.body.style.background = "#fff";
        navbar.style.background = "#4A69BB";
        text.style.color = "#000";
        text1.style.color = "#000";
        caloriesText.style.color = "#000";
    }
});