/*Post*/

const likeBottomPosts = document.querySelectorAll(".posts .bottoms .like");

likeBottomPosts.forEach((likeBottomPost) => {
  likeBottomPost.addEventListener("click", () => {
    const like = likeBottomPost.querySelector("svg");
    if (isFilled) {
      like.setAttribute("fill", "none");
    } else {
      like.setAttribute("fill", "#ff3040");
    }

    isFilled = !isFilled;
  });
});

/*Guardar post*/

const saveBottomPosts = document.querySelectorAll(".posts .bottoms .save");
saveBottomPosts.forEach((saveBottomPost) => {
  saveBottomPost.addEventListener("click", () => {
    const save = saveBottomPost.querySelector("svg");
    if (isFilled) {
      save.setAttribute("fill", "none");
    } else {
      save.setAttribute("fill", "black");
    }

    isFilled = !isFilled;
  });
});

/*Buscar aside */
const buscarDiv = document.getElementById("buscar-div");

// Inicializa una variable para rastrear el estado del botón
let isStrokeIncreased = false;

buscarDiv.addEventListener("click", function () {
  const svgElement = buscarDiv.querySelector("svg");

  // Obtiene el valor actual del atributo stroke-width
  const currentStrokeWidth = parseFloat(
    svgElement.getAttribute("stroke-width")
  );

  // Alterna entre dos valores de grosor de trazo (puedes ajustarlos)
  const newStrokeWidth = isStrokeIncreased ? 1.5 : 3.5;

  // Establece el nuevo valor del stroke-width en el elemento SVG
  svgElement.setAttribute("stroke-width", newStrokeWidth);

  // Actualiza el estado del botón
  isStrokeIncreased = !isStrokeIncreased;
});

/*Seguir aside derecho*/
document.addEventListener("DOMContentLoaded", function () {
  var botonesSeguir = document.querySelectorAll(".btn-seguir");
  botonesSeguir.forEach(function (botonSeguir) {
    var activado = false; // Variable de estado inicialmente desactivada

    botonSeguir.addEventListener("click", function () {
      if (!activado) {
        // Si está desactivado
        botonSeguir.innerText = "Siguiendo";
        botonSeguir.style.color = "grey";
      } else {
        // Si está activado
        botonSeguir.innerText = "Seguir";
        botonSeguir.style.color = "#3498db";
      }
      // Alterna el estado
      activado = !activado;
    });
  });
});

/*Menu buscar*/
const buscarContainer = document.querySelector(".menu_buscar");
const buscar = document.querySelector(".buscar");

buscar.addEventListener("click", () => {
  buscarContainer.classList.toggle("activado");
});

/*Comentario*/
// Selecciona todos los elementos con la clase "comentario"
const inputElements = document.querySelectorAll(".comentario");

// Selecciona todos los elementos con la clase "enviarComentario"
const enviarButtons = document.querySelectorAll(".enviarComentario");

// Selecciona todos los elementos con la clase "contenedor"
const contenedores = document.querySelectorAll(".contenedor");

// Itera sobre los elementos y agrega el evento a cada uno
enviarButtons.forEach((enviarButton, index) => {
  enviarButton.addEventListener("click", () => {
    // Obtiene el texto ingresado en el elemento correspondiente
    const textoIngresado = inputElements[index].value;

    // Crea un elemento de párrafo
    const parrafo = document.createElement("p");

    // Crea un elemento de texto en negrilla solo para "luna ferrer"
    const textoEnNegrita = document.createElement("strong");
    textoEnNegrita.textContent = "luna ferrer";

    // Adjunta el texto en negrilla al párrafo
    parrafo.appendChild(textoEnNegrita);

    // Agrega el texto ingresado después del texto en negrilla
    parrafo.innerHTML += ` ${textoIngresado}`;

    // Limpia el contenido anterior del contenedor correspondiente
    contenedores[index].innerHTML = "";

    // Agrega el párrafo al contenedor correspondiente
    contenedores[index].appendChild(parrafo);
  });
});

/*Guardar*/

const guardarContainer = document.querySelector(".menu_guardar");
const guardar = document.querySelector(".save");

guardar.addEventListener("click", () => {
  guardarContainer.classList.toggle("activar");
});
