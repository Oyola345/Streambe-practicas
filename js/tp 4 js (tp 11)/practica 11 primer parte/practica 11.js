/* Lea Oyola */
//Actividad 1 Beeper

var bodySelector = document.body;
var button = document.querySelector("button");

function seEjecutaEnEvento(){
    bodySelector.insertAdjacentHTML("beforeend", '<p>BEEP</p>');
    bodySelector.classList.toggle("color")
}

button.addEventListener("click",seEjecutaEnEvento)

//Actividad 2: resaltado
var p = document.getElementsByTagName("p")

for(let i = 0; i < p.length; i++){
    p[i].addEventListener("click", function(){
        this.classList.toggle("resaltado")
        console.log("click")
    })
}

//Actividad 3

const magiaDiv = document.getElementById('magia');
const img = document.getElementById('img1');

magiaDiv.addEventListener('mouseover', function() {
    img.style.display = 'none';
  });

    
magiaDiv.addEventListener('mouseout', () => {
    img.style.display = 'block';
  });
