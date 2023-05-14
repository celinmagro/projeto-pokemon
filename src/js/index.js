// Objetivo: Alterar tema.

// N1 - Clique no botão de troca de tema, adicionar classe dark-mode no body.
const buttonChangeTheme = document.getElementById("change-theme");

// N2 - Pegar no JS o elemento HTML correspondente ao body.
const body = document.querySelector("body");

// Buscando img
const imageButtonChangeTheme = document.querySelector(".image-button");

// N3 - Identificar o clique do usuário no botão change-theme.
buttonChangeTheme.addEventListener("click",() => {
    // N4 - Adicionar classe dark-mode no body.
    body.classList.add("dark-mode");

    //N5 - Alterar imagem do botão.
    imageButtonChangeTheme.setAttribute("src", "./src/images/moon.png")

    // Objetivo 2: Voltar o tema para o modo claro.

    // N6 - Remover "dark-mode" no body.
    if (body.classList.contains("dark-mode")) {
        
    }
});