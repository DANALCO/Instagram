const botonIdiomas = document.getElementById('botonIdiomas');
const listaIdiomas = document.getElementById('listaIdiomas');

botonIdiomas.addEventListener('click', function() {
  if (listaIdiomas.style.display === 'none' || listaIdiomas.style.display === '') {
    listaIdiomas.style.display = 'block';
  } else {
    listaIdiomas.style.display = 'none';
  }
});

// Agregar un detector de eventos de clic al documento
document.addEventListener('click', function(event) {
  if (event.target !== botonIdiomas && !listaIdiomas.contains(event.target)) {
    listaIdiomas.style.display = 'none';
  }
});

// Agregar manejadores de eventos de clic a los elementos de la lista
const elementosLista = listaIdiomas.getElementsByTagName('li');

for (let i = 0; i < elementosLista.length; i++) {
  elementosLista[i].addEventListener('click', function() {
    listaIdiomas.style.display = 'none';
    // Aquí puedes agregar el código adicional que deseas ejecutar cuando se hace clic en un elemento de la lista
  });
}
