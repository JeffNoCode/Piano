const teclaPiano = document.querySelectorAll(".teclas-piano .tecla");
const volumeControl = document.querySelector(".volume-scroll input");
const mostrarTeclasCheckbox = document.querySelector(".opcoes-selecionaveis input");

let Todosaudios = [],  
audio = new Audio("teclas/a.mp3");

// Tocar música ao pressionar tecla
const tocarMusica = (tecla) => {
    audio.src = `teclas/${tecla}.mp3`;
    audio.play();
    audio.volume = volumeControl.value / 100;  // Ajustar volume

    const teclaPressionada = document.querySelector(`[data-tecla="${tecla}"]`);
    teclaPressionada.classList.add("active");
    setTimeout(() => {
        teclaPressionada.classList.remove("active");
    }, 100);
}

// Adicionar evento de clique nas teclas
teclaPiano.forEach(tecla => {
    Todosaudios.push(tecla.dataset.tecla);
    tecla.addEventListener("click", () => tocarMusica(tecla.dataset.tecla));
});

// Detectar tecla pressionada
const teclaPressionada = (e) => {
    if(Todosaudios.includes(e.key.toLowerCase())) tocarMusica(e.key.toLowerCase());
}

document.addEventListener("keydown", teclaPressionada);

// Ajustar volume
volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value / 100;
});

// Mostrar ou esconder teclas
mostrarTeclasCheckbox.addEventListener("change", () => {
    teclaPiano.forEach(tecla => {
        const span = tecla.querySelector("span");
        span.style.display = mostrarTeclasCheckbox.checked ? "block" : "none";
    });
});
