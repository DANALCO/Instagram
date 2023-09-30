const masContainer = document.querySelector(".menu_mas");
const mas = document.querySelector(".mas");

mas.addEventListener("click", () => {
  masContainer.classList.toggle("actives");
});

// Boton cambiar
const cambiarContainer = document.querySelector(".menu_cambiar");
const cambiar = document.querySelector(".cambiar");

cambiar.addEventListener("click", () => {
  cambiarContainer.classList.toggle("activ");
});

closeBtnCambiar.addEventListener("click", () => {
  cambiarContainer.classList.remove("active");
});
