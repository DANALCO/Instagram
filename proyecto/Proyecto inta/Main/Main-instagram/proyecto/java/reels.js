// Función para mutear o desmutear el video específico
function Mutear(element) {
    const video = element.closest(".cont-video").querySelector('.myVideo');
    const mute = element.querySelector('.mute');

    if (video.muted) {
        video.muted = false;
        mute.src = "../assets/iconos/audio-on white.png";
    } else {
        video.muted = true;
        mute.src = "../assets/iconos/audio-off white.png";
    }
}

// Función para pausar el video específico
// referencia al video dentro del contenedor específico
const videos = document.querySelectorAll('.myVideo');

// controlador de clic a cada botón para mostrar/ocultar pausa
const mostrarBtns = document.querySelectorAll('.mostrarBtn');
const pausas = document.querySelectorAll('.pausa');
let videoPaused = Array(videos.length).fill(false);

for (let i = 0; i < mostrarBtns.length; i++) {
    mostrarBtns[i].addEventListener('click', () => {
        const pausa = pausas[i];
        if (pausa.classList.contains('oculto')) {
            // Mostrar la imagen de pausa
            pausa.classList.remove('oculto');
            pausa.classList.remove('desaparecer'); // Quitar la clase de desaparición si estaba presente
            pausa.classList.add('visible');
            if (!videoPaused[i]) {
                videos[i].pause(); // Pausar el video
                videoPaused[i] = true;
            }
        } else {
            // Ocultar la imagen de pausa con animación de desaparición
            pausa.classList.remove('visible');
            pausa.classList.add('desaparecer');
            if (videoPaused[i]) {
                videos[i].play(); // Reanudar el video
                videoPaused[i] = false;
            }
            // Después de la animación de desaparición, restablecer la imagen a su estado inicial
            setTimeout(() => {
                pausa.classList.remove('desaparecer');
                pausa.classList.add('oculto');
            }, 500); // La duración de la animación de desaparición es de 0.5 segundos
        }
    });
}

// Función para cambiar la imagen del corazón y aplicar la animación
function cambiarImagen(corazon) {
    // Obtiene el valor del atributo personalizado "data-imagen-actual"
    let imagenActual = parseInt(corazon.getAttribute("data-imagen-actual"));

    // Cambia la imagen y actualiza el valor del atributo personalizado
    if (imagenActual === 1) {
        corazon.src = "../assets/iconos/heart red.png";
        imagenActual = 2;
    } else {
        corazon.src = "../assets/iconos/heart.png";
        imagenActual = 1;
    }

    // Actualiza el valor del atributo personalizado en el botón de corazón
    corazon.setAttribute("data-imagen-actual", imagenActual);

    // Aplica la animación "palpitar"
    corazon.style.animation = "palpitar 0.3s";
    setTimeout(() => {
        corazon.style.animation = ""; // Restaura la animación
    }, 300);
}

// Función para manejar el evento mouseout del corazón
function onMouseOut(corazon) {
    const imagenActual = parseInt(corazon.getAttribute("data-imagen-actual"));
    if (imagenActual === 1) {
        // Aplica la animación "palpitar" en caso de mouseout
        corazon.style.animation = "palpitar 0.3s";
        setTimeout(() => {
            corazon.style.animation = ""; // Restaura la animación
        }, 300);
    }
}

// eventos click y mouseout a los botones de corazón en todos los recuadros emergentes
const botonesCorazon = document.querySelectorAll(".corazon");
botonesCorazon.forEach((botonCorazon) => {
    botonCorazon.addEventListener("click", () => {
        cambiarImagen(botonCorazon);
    });

    botonCorazon.addEventListener("mouseout", () => {
        onMouseOut(botonCorazon);
    });
});

// Función para habilitar o deshabilitar el botón de publicar comentario
function commentButton(containerId) {
    const commentInput = document.querySelector(`#${containerId} .comment-input`);
    const publishButton = document.querySelector(`#${containerId} .publish-button`);

    if (commentInput.value.trim() !== "") {
        publishButton.style.display = "block";
    } else {
        publishButton.style.display = "none";
    }
}

// Función para agregar comentarios
function addComment(containerId) {
    const commentInput = document.querySelector(`#${containerId} .comment-input`);
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
        const commentsDiv = document.querySelector(`#${containerId} .comments`);
        const newComment = document.createElement("div");
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);
        commentInput.value = "";
        commentButton(containerId); // Actualiza el botón de publicar comentario
    }
}

// Agrega un controlador de clic al botón de guardar
const botonesGuardar = document.querySelectorAll(".guardar");

botonesGuardar.forEach((botonGuardar) => {
    botonGuardar.addEventListener("click", () => {
        cambiarGuardado(botonGuardar);
    });
});

// Función para cambiar el estado del botón de guardar específico
function cambiarGuardado(botonGuardar) {
    const contvideo = botonGuardar.closest(".cont-video");
    const guardar = contvideo.querySelector(".guardar");

    // Cambia la imagen y el estado actual
    if (guardar.getAttribute("data-guardado-actual") === "1") {
        guardar.src = "../assets/iconos/bookmark black.png";
        guardar.setAttribute("data-guardado-actual", "2");
    } else {
        guardar.src = "../assets/iconos/bookmark.png";
        guardar.setAttribute("data-guardado-actual", "1");
    }
}

// Función para mostrar u ocultar el emoji-container
function emojiButtonClick(button) {
    const contVideo = button.closest(".cont-video");
    const emojiContainer = contVideo.querySelector(".emoji-container");
    if (emojiContainer.style.display === "block") {
        emojiContainer.style.display = "none";
    } else {
        emojiContainer.style.display = "block";
    }
}

// Función para mostrar u ocultar "share" en el contexto del botón específico
function toggleShare(button) {
    const contVideo = button.closest(".cont-video");
    const shareContainer = contVideo.querySelector(".share-container");
    const commentsContainer = contVideo.querySelector(".comments-container");
    const moreContainer = contVideo.querySelector(".more-container");
    const emojiContainer = contVideo.querySelector(".emoji-container");

    if (shareContainer.style.display === "block") {
        shareContainer.style.display = "none";
    } else {
        shareContainer.style.display = "block";
        if (moreContainer.style.display === "block") {
            moreContainer.style.display = "none";
        }
        if (commentsContainer.style.display === "block") {
            commentsContainer.style.display = "none";
        } 
        if (commentsContainer.style.display === "block") {
            commentsContainer.style.display = "none";
        } 
        if (emojiContainer.style.display === "block") {
            emojiContainer.style.display = "none";
        } 
    }
}

// Función para mostrar u ocultar "more" en el contexto del botón específico
function toggleMore(button) {
    const contVideo = button.closest(".cont-video");
    const moreContainer = contVideo.querySelector(".more-container");
    const shareContainer = contVideo.querySelector(".share-container");
    const commentsContainer = contVideo.querySelector(".comments-container");
    const emojiContainer = contVideo.querySelector(".emoji-container");

    if (moreContainer.style.display === "block") {
        moreContainer.style.display = "none";
    } else {
        moreContainer.style.display = "block";
        if (shareContainer.style.display === "block") {
            shareContainer.style.display = "none";
        } 
        if (commentsContainer.style.display === "block") {
            commentsContainer.style.display = "none";
        } 
        if (emojiContainer.style.display === "block") {
            emojiContainer.style.display = "none";
        } 
    }
}

// Función para mostrar u ocultar "comments" en el contexto del botón específico
function toggleComments(button) {
    const contVideo = button.closest(".cont-video");
    const commentsContainer = contVideo.querySelector(".comments-container");
    const shareContainer = contVideo.querySelector(".share-container");
    const moreContainer = contVideo.querySelector(".more-container");
    const emojiContainer = contVideo.querySelector(".emoji-container");

    if (commentsContainer.style.display === "block") {
        commentsContainer.style.display = "none";
        if (emojiContainer.style.display === "block") {
            emojiContainer.style.display = "none";
        } 
    } else {
        commentsContainer.style.display = "block";
        if (shareContainer.style.display === "block") {
            shareContainer.style.display = "none";
        } 
        if (moreContainer.style.display === "block") {
            moreContainer.style.display = "none";
        } 
    }
}

// Agrega un evento click al botón de seguir
const seguirBotones = document.querySelectorAll('.seguirBoton');

seguirBotones.forEach((seguirBoton) => {
    seguirBoton.addEventListener('click', function() {
        // Verifica el texto actual del botón específico
        if (seguirBoton.textContent === '. Seguir') {
            // Si el texto es '. Seguir', cámbialo a '. Siguiendo'
            seguirBoton.textContent = '. Siguiendo';
        } else {
            // Si el texto no es '. Siguiendo', cámbialo nuevamente a '. Seguir'
            seguirBoton.textContent = '. Seguir';
        }
    });
});
