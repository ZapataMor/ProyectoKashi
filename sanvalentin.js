const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');
const audio = document.querySelector('audio');

if (botonSi && botonNo) {
    botonSi.addEventListener('click', () => {
        // Guardar el estado del audio en localStorage
        localStorage.setItem('audioTime', audio.currentTime);
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
}

// al hacer click en la pagina dar play al audio
document.addEventListener('click', () => {
    audio.play();
});