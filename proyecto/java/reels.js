const video = document.querySelector('.myVideo');
const muteButton = document.querySelector('.mute-button');
const mute = document.querySelector('.mute')
const pausa = document.querySelector('.pausa');
let videoPaused = false;

function Mutear() {
    if (video.muted) {
        video.muted = false;
        mute.src = "../assets/iconos/audio-on.png";
    } else {
        video.muted = true;
        mute.src = "../assets/iconos/audio-off.png";
    }
}

const mostrarBtn = document.querySelector('.mostrarBtn');

mostrarBtn.addEventListener('click', () => {
    if (pausa.classList.contains('oculto')) {
        // Mostrar imagen
        pausa.classList.remove('oculto');
        pausa.classList.remove('desaparecer'); // Quitar la clase de desaparición si estaba presente
        pausa.classList.add('visible');
        if (!videoPaused) {
            video.pause(); // Pausar el video
            videoPaused = true;
        }
    } else {
        // Ocultar imagen con animación de desaparición
        pausa.classList.remove('visible');
        pausa.classList.add('desaparecer');
        if (videoPaused) {
            video.play(); // Reanudar el video
            videoPaused = false;
        }
        // Después de la animación de desaparición, restablecer la imagen a su estado inicial
        setTimeout(() => {
            pausa.classList.remove('desaparecer');
            pausa.classList.add('oculto');
        }, 500); // La duración de la animación de desaparición es de 0.5 segundos
    }
});

pausa.addEventListener('click', () => {
    if (pausa.classList.contains('oculto')) {
        // Mostrar imagen
        pausa.classList.remove('oculto');
        pausa.classList.remove('desaparecer'); // Quitar la clase de desaparición si estaba presente
        pausa.classList.add('visible');
        if (!videoPaused) {
            video.pause(); // Pausar el video
            videoPaused = true;
        }
    } else {
        // Ocultar imagen con animación de desaparición
        pausa.classList.remove('visible');
        pausa.classList.add('desaparecer');
        if (videoPaused) {
            video.play(); // Reanudar el video
            videoPaused = false;
        }
        // Después de la animación de desaparición, restablecer la imagen a su estado inicial
        setTimeout(() => {
            pausa.classList.remove('desaparecer');
            pausa.classList.add('oculto');
        }, 500); // La duración de la animación de desaparición es de 0.5 segundos
    }
});
// Variable para rastrear el estado actual del corazon
let imagenActual = 1;

// Función para cambiar corazon y aplicar la animación
function cambiarImagen() {
    const corazon = document.querySelector(".corazon");

    // Cambia la imagen y el estado actual
    if (imagenActual === 1) {
        corazon.src = "../assets/iconos/heart black.png";
        imagenActual = 2;

        // Aplica la animación "palpitar"
        corazon.style.animation = "palpitar 0.3s";
        setTimeout(() => {
            corazon.style.animation = ""; // Restaura la animación
        }, 300);
    } else {
        corazon.src = "../assets/iconos/heart.png";
        imagenActual = 1;
    }
}

// Función para manejar el evento mouseout
function onMouseOut() {
    if (imagenActual === 1) {
        const corazon = document.querySelector(".corazon");
        // Aplica la animación "palpitar" en caso de mouseout
        corazon.style.animation = "palpitar 0.3s";
        setTimeout(() => {
            corazon.style.animation = ""; // Restaura la animación
        }, 300);
    }
}

// Agrega eventos click y mouseout al corazón
const corazon = document.querySelector(".corazon");
corazon.addEventListener("click", cambiarImagen);
corazon.addEventListener("mouseout", onMouseOut);

function commentButton() {
    const commentInput = document.querySelector(".comment-input");
    const publishButton = document.querySelector(".publish-button");

    if (commentInput.value.trim() !== "") {
        publishButton.style.display = "block";
    } else {
        publishButton.style.display = "none";
    }
}

function addComment() {
    const commentInput = document.querySelector(".comment-input");
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentsDiv = document.querySelector(".comments");
        const newComment = document.createElement("div");
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);
        commentInput.value = "";
        commentButton();
    }
}
let commentsVisible = false;

function toggleComments() {
    const commentsContainer = document.querySelector(".comments-container");
    
    commentsVisible = !commentsVisible;

    if (commentsVisible) {
        commentsContainer.style.display = "block";
        // No mostramos emoji-container aquí
    } else {
        commentsContainer.style.display = "none";
        document.querySelector(".emoji-container").style.display = "none"; // Ocultar emoji-container
        if (emojiContainerVisible){
            emojiContainerVisible = !emojiContainerVisible;
        }
    }
}

function closeComments() {
    const commentsContainer = document.querySelector(".comments-container");
    commentsVisible = !commentsVisible;
    commentsContainer.style.display = "none";
    document.querySelector(".emoji-container").style.display = "none"; // Ocultar emoji-container
    if (emojiContainerVisible){
        emojiContainerVisible = !emojiContainerVisible;
    }
}

let emojiContainerVisible = false;

function emojiButtonClick() {
    if (commentsVisible) {
        const emojiContainer = document.querySelector(".emoji-container");
        emojiContainerVisible = !emojiContainerVisible;

        if (emojiContainerVisible) {
            emojiContainer.style.display = "block"; // Mostrar emoji-container
        } else {
            emojiContainer.style.display = "none"; // Ocultar emoji-container
        }
    }
}
let shareVisible = false;

function toggleShare() {
    const shareContainer = document.querySelector(".share-container");
    
    shareVisible = !shareVisible;

    if (shareVisible) {
        shareContainer.style.display = "block";
    } else {
        shareContainer.style.display = "none";
    }
}

function closeShare() {
    const shareContainer = document.querySelector(".share-container");
    shareVisible = !shareVisible;
    shareContainer.style.display = "none";
}
// Variable para rastrear el estado actual de la imagen
let guardarActual = 1;

// Función para cambiar corazon y aplicar la animación
function cambiarGuardado() {
    const guardar = document.querySelector(".guardar");

    // Cambia la imagen y el estado actual
    if (guardarActual === 1) {
        guardar.src = "../assets/iconos/bookmark black.png";
        guardarActual = 2;
    } else {
        guardar.src = "../assets/iconos/bookmark.png";
        guardarActual = 1;
    }
}
const guardar = document.querySelector(".guardar");
guardar.addEventListener("click", cambiarGuardado);

let moreVisible = false;

function toggleMore() {
    const moreContainer = document.querySelector(".more-container");
    
    moreVisible = !moreVisible;

    if (moreVisible) {
        moreContainer.style.display = "block";
    } else {
        moreContainer.style.display = "none";
    }
}
// Obtén el botón por su ID
const seguirBoton = document.querySelector('.seguirBoton');

// Agrega un evento click al botón
seguirBoton.addEventListener('click', function() {
    // Verifica el texto actual del botón
    if (seguirBoton.textContent === '. Seguir') {
        // Si el texto es 'xd', cámbialo a 'a'
        seguirBoton.textContent = '. Siguiendo';
    } else {
        // Si el texto no es 'xd', cámbialo nuevamente a 'xd'
        seguirBoton.textContent = '. Seguir';
    }
});