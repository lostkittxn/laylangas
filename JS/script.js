function moveToSelected(element) {
    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            moveToSelected('prev');
            break;
        case 39: // right
            moveToSelected('next');
            break;
        default: return;
    }
    e.preventDefault();
});

// Manejo de clics en los elementos del carrusel
$('#carousel div').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});

// Función para manejar el deslizamiento
function handleSwipe(direction) {
    if (direction === 'left') {
        moveToSelected('prev');
    } else if (direction === 'right') {
        moveToSelected('next');
    }
}

// Detectar el deslizamiento
let touchstartX = 0;
let touchendX = 0;

const carousel = document.getElementById('carousel'); // Asegúrate de que el ID sea correcto

carousel.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX) {
        handleSwipe('left');
    }
    if (touchendX > touchstartX) {
        handleSwipe('right');
    }
}
