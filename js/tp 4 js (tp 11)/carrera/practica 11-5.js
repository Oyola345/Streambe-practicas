const redCar = document.querySelector("#red-car")
const blueCar = document.querySelector("#blue-car")
const brownCar = document.querySelector("#brown-car")
const silverCar = document.querySelector("#silver-car")
const purpleCar = document.querySelector("#purple-car")
var metaList = document.querySelectorAll(".meta");
var body = document.body

var moveRedCar = 0
var moveBlueCar = 0
var moveBrownCar = 0
var moveSilverCar = 0
var movePurpleCar = 0
var bodyWidth = body.clientWidth

metaList.forEach(function(meta) {
  meta.style.left = (bodyWidth - 200) + 'px';
});

window.addEventListener("keyup", function(keyUp){
    keyUpLowerCase = keyUp.key.toLowerCase()
    //definir movimientos
    if(keyUpLowerCase == "r"){
        if((moveRedCar+100) > bodyWidth-150){
            moveRedCar = bodyWidth-150
        } else{
            moveRedCar = moveRedCar + 100
        }
        redCar.style.left = moveRedCar + 'px'
    }
    if(keyUpLowerCase == "a"){
        if((moveBlueCar+100) > bodyWidth-150){
            moveBlueCar = bodyWidth-150
        } else{
            moveBlueCar = moveBlueCar + 100
        }
        blueCar.style.left = moveBlueCar + "px"
    }
    if(keyUpLowerCase == "m"){
        if((moveBrownCar+100) > bodyWidth-150){
            moveBrownCar = bodyWidth-150
        } else{
            moveBrownCar = moveBrownCar + 100
        }
        brownCar.style.left = moveBrownCar + "px"
    }

    if(keyUpLowerCase == "p"){
        if((moveSilverCar+100) > bodyWidth-150){
            moveSilverCar = bodyWidth-150
        } else{
            moveSilverCar = moveSilverCar + 100
        }
        silverCar.style.left = moveSilverCar + "px"
    }

    if(keyUp.key == "ArrowRight"){
        if((movePurpleCar+100) > bodyWidth-150){
            movePurpleCar = bodyWidth-150
        } else{
            movePurpleCar = movePurpleCar + 100
        }
        purpleCar.style.left = movePurpleCar + 'px'
    }

    //definir victoria
    if(moveRedCar >= bodyWidth-150){
        body.style.backgroundColor="red"
        alert("¡Ganó: el auto rojo!")
    } else if (moveBlueCar >= bodyWidth-150){
        body.style.backgroundColor="blue"
        alert("¡Ganó: el auto azul!")
    } else if (moveBrownCar >= bodyWidth-150){
        body.style.backgroundColor="brown"
        alert("¡Ganó: el auto marrón!")
    } else if (moveSilverCar >= bodyWidth-150){
        body.style.backgroundColor="gray"
        alert("¡Ganó: el auto plateado!")
    } else if (movePurpleCar >= bodyWidth-150){
        body.style.backgroundColor="purple"
        alert("¡Ganó: el auto violeta!")
    }
})