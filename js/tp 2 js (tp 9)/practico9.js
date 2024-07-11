/* Lea Oyola */
input = prompt("Ingrese un número")

function triplicador(x){
    return x*3
}

function multiplicador(x,y){
    return x*y
}

function division(x, y){
    return x/y
}

function resto(x, y){
    return x % y
}

function total(x){
    resultado = triplicador(x)
    resultado = multiplicador (resultado, 12)
    resultado = division (resultado, 12)
    resultado = resto (resultado, 3)
    return resultado
}

alert("El resultado es: " + total(input))

/* contarDeA_n
En este ejercicio deberás escribir una Función llamada contarDeA_n que tenga los Parámetros contar_de_a y contar_hasta. Además, deberá escribir en la consola los números desde el 1 hasta contar_hasta en intervalos de contar_de_a. */

function contador(intervalo, contar_hasta){
    for (var i = 1; i <=contar_hasta; i +=intervalo) {
        console.log(i)
    }
}
contador (2,10) 

/* En este ejercicio, deberás escribir una nueva versión de FizzBuzz (fizzBuzz2) que tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una palabra para cada String (palabra1 y palabra2) que reemplace a Fizz y a Buzz.
Para completar este ejercicio, deberás:
Lograr que fizzBuzz2 devuelva un String con los números separados por comas.
Mejorar la Función para que el usuario pueda decidir hasta qué número tiene que contar fizzBuzz2.
Mejorar la Función para que el usuario pueda ingresar fizz_num y buzz_num para que la sustitución de palabras ocurra en los números múltiplos de los nuevos argumentos de 
entrada (en vez de solo 3 y 5). */

function fizzBuzz2(numero, fizz_num, buzz_num, palabra1, palabra2) {
    let resultado = '';
    for (let i = 1; i <= numero; i++) {
      if (i % fizz_num === 0 && i % buzz_num === 0) {
        resultado += palabra1 + palabra2 + ',';
      } else if (i % fizz_num === 0) {
        resultado += palabra1 + ',';
      } else if (i % buzz_num === 0) {
        resultado += palabra2 + ',';
      } else {
        resultado += i + ',';
      }
    }
    return resultado.slice(0, -1);
  }

  alert(numero = prompt("Ingrese en el siguiente orden: el numero hasta el cual se debe contar"))
  alert(fizz_num = prompt("Ingrese el fizz num"))
  alert(buzz_num = prompt("Ingrese el buzz num"))
  alert(palabra1 = prompt("Ingrese la palabra 1"))
  alert(palabra2 = prompt("Ingrese la palabra 2"))

  alert(fizzBuzz2(numero, fizz_num, buzz_num, palabra1, palabra2))
  console.log(fizzBuzz2(numero, fizz_num, buzz_num, palabra1, palabra2))
