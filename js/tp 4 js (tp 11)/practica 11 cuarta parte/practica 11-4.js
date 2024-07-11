//actividad 6 lea oyola
const bodyElement = document.body;
const colorInput = document.getElementById('color-input');

const colors = {
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow',
  };
  
  colorInput.addEventListener('keydown', function(event) {
    const color = colors[colorInput.value.toLowerCase()];
    bodyElement.style.backgroundColor = color || 'white';
  });