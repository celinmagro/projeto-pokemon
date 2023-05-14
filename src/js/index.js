// Objetivo: Alterar tema.

const buttonChangeTheme = document.getElementById("change-theme");
const body = document.querySelector("body");
const imageButtonChangeTheme = document.querySelector(".image-button");

buttonChangeTheme.addEventListener("click",() => {
    const darkModeActivated = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (darkModeActivated) {
        imageButtonChangeTheme.setAttribute("src", "./src/images/sun.png");
    } else {
        imageButtonChangeTheme.setAttribute("src", "./src/images/moon.png");
    }
});