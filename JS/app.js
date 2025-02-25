let peliculasFavoritas = [];
let watchlist = [];

function agregarPelicula() {
    const peliculaInput = document.getElementById('peliculaInput');
    const imagenInput = document.getElementById('imagenInput');
    const peliculaNombre = peliculaInput.value.trim();

    if (peliculaNombre && imagenInput.files.length > 0 && peliculasFavoritas.length < 4) {
        const file = imagenInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            peliculasFavoritas.push({ nombre: peliculaNombre, imagen: e.target.result });
            peliculaInput.value = '';
            imagenInput.value = '';
            mostrarPeliculasFavoritas();
        };

        reader.readAsDataURL(file); 
    } else {
        alert('Ingresa el nombre de la pelicula asi como tambien ingresar una imagen para la misma');
    }
}

function mostrarPeliculasFavoritas() {
    const lista = document.getElementById('peliculasFavoritas');
    lista.innerHTML = '';
    peliculasFavoritas.forEach((pelicula, index) => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = pelicula.imagen;
        img.alt = pelicula.nombre;
        img.style.width = '50px'; 
        img.style.marginRight = '10px'; 

        li.appendChild(img);
        li.appendChild(document.createTextNode(pelicula.nombre));
        
        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.onclick = () => eliminarPelicula(index);
        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarPelicula(index) {
    peliculasFavoritas.splice(index, 1);
    mostrarPeliculasFavoritas();
}

function agregarAWatchlist() {
    const watchlistInput = document.getElementById('watchlistInput');
    const imagenInput = document.getElementById('watchlistImagenInput');
    const peliculaNombre = watchlistInput.value.trim();

    if (peliculaNombre && imagenInput.files.length > 0) {
        const file = imagenInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            watchlist.push({ nombre: peliculaNombre, imagen: e.target.result });
            watchlistInput.value = '';
            imagenInput.value = '';
            mostrarWatchlist();
        };

        reader.readAsDataURL(file); 
    } else {
        alert('Ingresa el nombre de la pelicula asi como tambien ingresar una imagen para la misma');
    }
}

function mostrarWatchlist() {
    const lista = document.getElementById('watchlist');
    lista.innerHTML = '';
    watchlist.forEach((pelicula, index) => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = pelicula.imagen;
        img.alt = pelicula.nombre;
        img.style.width = '50px'; 
        img.style.marginRight = '10px'; 

        li.appendChild(img);
        li.appendChild(document.createTextNode(pelicula.nombre));
        
        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';
        btn.onclick = () => eliminarDeWatchlist(index);
        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function eliminarDeWatchlist(index) {
    watchlist.splice(index, 1);
    mostrarWatchlist();
}