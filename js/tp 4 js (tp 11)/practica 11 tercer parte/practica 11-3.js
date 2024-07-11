  //actividad 5 lea oyola

  const bodyRatatouille = document.body;
  const imgRatatouille = document.getElementById('ratatouille-img')

  let isMouseDown = false;

  bodyRatatouille.addEventListener('mousedown', function() {
    isMouseDown = true;
  });

  bodyRatatouille.addEventListener('mouseup', function() {
    isMouseDown = false;
  });

  bodyRatatouille.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
      imgRatatouille.style.top = event.clientY + "px";
      imgRatatouille.style.left = event.clientX + "px";
    }
  });