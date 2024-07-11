
//Actividad 4
document.getElementById("boton1").addEventListener("click", function() {
    document.getElementsByTagName("img")[0].classList.toggle("oculto");
  });
  
  document.getElementById("boton2").addEventListener("click", function() {
    document.getElementsByTagName("img")[1].classList.toggle("oculto");
  });
  
  document.getElementById("boton3").addEventListener("click", function() {
    document.getElementsByTagName("img")[2].classList.toggle("oculto");
  });
  
  // Event listeners para las imágenes
  document.getElementsByTagName("img")[0].addEventListener("click", function() {
    this.classList.add("oculto");
  });
  
  document.getElementsByTagName("img")[1].addEventListener("click", function() {
    this.classList.add("oculto");
  });
  
  document.getElementsByTagName("img")[2].addEventListener("click", function() {
    this.classList.add("oculto");
  });
