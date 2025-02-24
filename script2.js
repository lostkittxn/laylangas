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

document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});

document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});

document.addEventListener('gestureend', function(e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});
