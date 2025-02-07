const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');

botonSi.addEventListener('click', () => {
    window.location.href = 'respuesta_si.html';
});

botonNo.addEventListener('click', () => {
    // Aumentar el tamaño del botón "Sí"
    const fontSize = parseInt(window.getComputedStyle(botonSi).fontSize);
    botonSi.style.fontSize = `${fontSize + 5}px`;

    // Mover el botón "No" aleatoriamente
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    botonNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");
    audio.play().catch(error => {
        console.log("Reproducción bloqueada:", error);
    });
});
