//Actividad 1
alert("¡Bienvenido!")
var userName = prompt("Ingrese su nombre")
alert("Hola"+" "+userName)
var age = prompt("Ingrese su edad")
console.log("Edad: "+age)
alert("Hola"+" "+userName+" "+"de"+" "+age);

//Actividad 2
let nombre = "lea"
let edad = 18
let cumpleaños ="06/09/2005"
let ciudad ="La Plata"
let ocupacion = "Estudiante"
let pasatiempos = "Programar"
console.log("Hola"+" "+nombre+" "+"de"+" "+edad+" años "+", se que cumplis el "+cumpleaños+" y que sos de "+ciudad+" y que sos "+ocupacion+" y que tu pasatiempo es "+pasatiempos);
const uno = 1, dos = 2, tres = 3, cuatro = 4;

//Actividad 3
let texto = prompt("Ingrese un texto breve:");
console.log("El texto ingresado tiene ", texto.length, " caracteres");

//Actividad 4
var age = prompt("Ingrese su edad")
var days = age*365
alert("Hasta hoy tu total de días de vida es de: "+days+" días");

//Actividad 5
var num1 = prompt("ingrese un número")
var num2 = prompt("ingrese otro número")
var resultado = parseInt(num1) + parseInt(num2)
console.log("El resultado es: "+resultado);

//Actividad 6
var age = 18
var maxAge = 88
var leftYears = maxAge - age
var snack = "Oreo"
var dailySnacks = 0.50 //medio paquetepor día en promedio
var leftSnacks = dailySnacks * leftYears
console.log("Necesitarás "+ leftSnacks + " snacks para que te alcancen hasta los " + leftYears + " años.")
var priceOreo = 2 //2 dólares
var totalMoney = priceOreo*leftSnacks
console.log("Vas a gastar "+ totalMoney + " dólares en Oreos en toda tu vida");

//Actividad 7
var vacDays = 15
var maxBudget = 1000000
var food = 45
var maxFoodMoney = maxBudget/food
alert("Podés gastar "+ maxFoodMoney + " pesos en cada comida para que te alcance la plata durante los "+ vacDays + " días de viaje");