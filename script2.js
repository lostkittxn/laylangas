function mostrarImagenSeleccionada() {
    const selector = document.getElementById('imagenSelector');
    const imagen = document.getElementById('imagen');
    const imagenSeleccionada = selector.value;

    if (imagenSeleccionada) {
        imagen.src = imagenSeleccionada; 
        imagen.style.display = 'block'; 
    } else {
        imagen.style.display = 'none'; 
    }
}