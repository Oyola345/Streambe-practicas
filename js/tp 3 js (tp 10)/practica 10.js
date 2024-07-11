//Lea Oyola
//actividad 1
let objeto_demo = {
    uno: 1,
    dos: 2,
    tres:3
}

let uno = "tres"
//Uncaught SyntaxError: Identifier 'uno' has already been declared

objeto_demo['dos'];
//2
objeto_demo[uno];
//undefined

//actividad 2
let capitales = {
    Argentina : 'Buenos Aires',
    Uruguay: 'Montevideo'
}

let lugar = 'Uruguay'

capitales['lugar']
// undefined
capitales.lugar
// undefined
capitales[lugar]
// Montevideo
capitales['Argentina']
// Buenos Aires
capitales.Argentina
// Buenos Aires
capitales[Argentina]
// Uncaught ReferenceError: Argentina is not defined

//actividad 3: registro

let newUser = prompt("Ingrese su usuario")
let newAge = prompt("Ingrese su edad")
let newAdress = prompt("Ingrese su direccion")
let newBirthday = prompt("Ingrese su fecha de nacimiento")
let newPassword = prompt("Ingrese su contraseña")

let completeUser = {
    usuario: newUser,
    edad: newAge,
    direccion: newAdress,
    fechaDeNacimiento: newBirthday,
    contraseña: newPassword
}

console.log(completeUser);

//actividad 4: Variable miAuto

let propertyKey = "modelo"
let anotherPropertyKey = "precio"
let nextProperty = "color"

let miAuto = { 
    marca:"Honda",
    año: 2008,
    nuevo: false,
    modelo: propertyKey,
    valor: anotherPropertyKey,
    color: nextProperty,
};

for (let element in miAuto) {
    console.log(`${element}: ${miAuto[element]}`);
  };

  miAuto[propertyKey]
  //'modelo'
  miAuto["modelo"]
  //'modelo'
  miAuto[nextProperty]
  //'color'
  miAuto["color"]
  //'color'

//actividad 5: notas

const planilla = [{estudiante: "Juan", nota: 6},{estudiante: "Mario", nota: 8}, {estudiante: "Julia", nota: 10}, {estudiante: "Sofia", nota: 2}]

planilla.forEach(planilla => {
    if (planilla.nota > 5) {
      planilla.nota += 2;
    if (planilla.nota > 10) {
        planilla.nota = 10;
      }
    }
  })
  console.log(planilla);


  //actividad 6: base de datos peliculas

const listadoPeliculas = [
    {title: "Búsqueda implacable", rating: 5, youSawIt: true },
    {title: "Norbit", rating: 3, youSawIt: false},
    {title: "Mini espías" , rating: 2, youSawIt: true},
    {title: "La vida es bella", rating: 5, youSawIt:false}
]

let sawIt = ""

for(let i = 0; i<listadoPeliculas.length; i++){
    if (listadoPeliculas[i]["youSawIt"] == true){
        sawIt = "Viste"
    } else{
        sawIt = "No viste"
    }
    console.log(`${sawIt} "${listadoPeliculas[i]["title"]}" - ${listadoPeliculas[i]["rating"]} estrellas`);
}


//actividad 7: numeros duplicados
let numeros = [2, 4, 5, 37, 0]
let numeros_duplicados = {}
let numeroDuplicado

for (let i = 0; i < numeros.length; i++){
    numeroDuplicado = numeros[i]*2
    //console.log(numeroDuplicado)
    Object.defineProperty(numeros_duplicados, numeros[i], {value: numeroDuplicado});
}
console.log(numeros_duplicados);

//actividad 8: desafio +27
let personasEdades = [ { nombre: "Ana", edad: 28},{ nombre: "María", edad: 24},{ nombre: "José", edad: 31}];
let personasConMasDe27 = 
    personasEdades.filter((persona) => {
        return persona["edad"] > 27;
    });

console.log(personasConMasDe27);

//actividad 9: camino al oscar
let actoresVocales = []
let actoresPrincipales = ["Tom Hanks", "Johnny Deep", "Elizabeth Taylor", "Morgan Freeman", "Jennifer Aniston", "Meryl Streep", "Natalie Portman", "Ashton Kutcher"]
let peliculas = []
let actoresPrincipalesPorPelicula = {
    "Titanic":"Leonardo DiCaprio",
    "El padrino": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda":"Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
}

let nombresFiltrados = []

for(let i = 0; i < actoresPrincipales.length; i++){
    let nombresFiltrados = actoresPrincipales[i].split(' ');
    let primerNombre = nombresFiltrados[0];
    let apellido = nombresFiltrados[1];
    
    if(primerNombre[0].match(/[aeiou]/i) || apellido[0].match(/[aeiou]/i)){
        actoresVocales.push(actoresPrincipales[i]);
    }
}
console.log(`Actores con iniciales vocales: ${actoresVocales}`)

for(let pelicula in actoresPrincipalesPorPelicula){
    actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
}
console.log(actoresPrincipales)

for(let pelicula in actoresPrincipalesPorPelicula){
    peliculas.push(pelicula);
}
console.log(peliculas);
let peliculaPorActor = {};

for(let pelicula in actoresPrincipalesPorPelicula){
    let actor = actoresPrincipalesPorPelicula[pelicula];
    if(peliculaPorActor[actor]){
        peliculaPorActor[actor].push(pelicula);
    } else {
        peliculaPorActor[actor] = [pelicula];
    }
}
console.log(peliculaPorActor);

//actividad 10: posicion adecuada
let personas = [
    {nombre: "Alba", edad: 15},
    {nombre: "Estrella", edad: 30},
    {nombre: "Belen", edad: 20},
    {nombre: "Santiago", edad: 4},
    {nombre: "Katherine", edad: 55}
]

personas.sort((a, b) => a.edad - b.edad);

personas.forEach((persona, index) => {
  persona.posicion = index + 1;
});

console.log(personas);


//actividad 11: software factory
let ecommerce = [
    {nombre: "Samsung TV", precio: 6000, articulos: 10},
    {nombre: "DELL notebook", precio: 4000, articulos: 30},
    {nombre: "Auriculares Sony", precio: 1500, articulos: 15},
    {nombre: "Monitor Philips", precio: 12000, articulos: 20},
    {nombre: "Teclado logitech", precio: 3000, articulos: 5}
]

let valorTotal=[]

for ( let i = 0; i < ecommerce.length; i++){
    valorTotal.push((ecommerce[i]["precio"])*(ecommerce[i]["articulos"]))
};
console.log(valorTotal)
let totalArtículos = {}

for(let artículo in ecommerce){
    let producto = ecommerce[artículo]["nombre"];
    totalArtículos[producto] = valorTotal[artículo];
}
console.log(totalArtículos)