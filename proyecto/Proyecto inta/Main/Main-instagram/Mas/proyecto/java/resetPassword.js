document.addEventListener("DOMContentLoaded", function () {
  const inputUsuario = document.getElementById("inputUsuario");
  const botonEnviar = document.getElementById("botonEnviar");

  // Verificar el contenido del campo de entrada en tiempo real
  inputUsuario.addEventListener("input", function () {
      if (inputUsuario.value.trim() !== "") {
          // Si el campo no está vacío, habilita el botón y ajusta la opacidad
          botonEnviar.disabled = false;
          botonEnviar.style.opacity = "1";
      } else {
          // Si el campo está vacío, deshabilita el botón y ajusta la opacidad
          botonEnviar.disabled = true;
          botonEnviar.style.opacity = "0.5";
      }
  });
});