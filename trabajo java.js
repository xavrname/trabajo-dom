const parrafo = document.getElementById('miParrafo');
const boton = document.getElementById('cambiarColorBtn');

function cambiarColor() {
    let colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    parrafo.style.color = colorAleatorio; 
}

boton.addEventListener('click', cambiarColor);
