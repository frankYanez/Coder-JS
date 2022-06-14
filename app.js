//Solicito datos para el envio de dinero

// let dato = prompt("Ingresa el pais al que deseas enviar dinero");
// alert("Enviaras dinero a " + dato)

// let monto = parseInt(prompt("Ingresa el monto"));

// alert("Enviaras " + monto + " a " + dato)

// //Interes por envio
// const intereses = 1.5;

// //Funcion que hace la operacion
// function enviarDinero (n1,n2) {
//     return monto * intereses;
// }

// //Retorno de la operacion
// let resultado = enviarDinero(monto,intereses);

// function impPais (n1,n2){
//     return resultado + 50;
// }

// //Condicional: Si paga impuesto pais o no

// if (monto >= 100) {
//     alert("Ademas, debes pagar impuesto pais");
//     alert("El total del envio con recargo es de: $" + resultado);
// }

// else {
//     alert("Por el poco monto que envias, no pagaras impuesto pais");
// }

// //Muestro en consola el envio con recargo


//  function Pais(nombre,impuesto,valor,limite) {
//      this.nombre = nombre;
//      this.impuesto = impuesto;
//      this.valor = valor;
//      this.limite = limite;
//  }



//  let ingresaPais = parseInt(prompt("¡Bienvenido! A que pais desea enviar dinero? \n 1-Colombia\n 2-Ecuador \n 3-Peru \n 4-Brasil \n 5-Uruguay \n 6-Bolivia \n 7-Venezuela"))

//  let colombia = new Pais  ("Colombia", 1.25, 325, 500);
//  let ecuador = new Pais ("Ecuador", 2.0 , 330 , 600);
//  let peru = new Pais ("Peru", 2.7 , 300 , 500);
//  let brasil = new Pais ("Bolivia" , 2.5 , 351 , 700);
//  let uruguay = new Pais ("Uruguay" , 2.1 , 358 , 800);
//  let bolivia = new Pais ("Bolivia" , 2.7 , )

const paises = [ {
    id:1,
    nombre: "Colombia",
    impuesto: 1.25,
    valor: 325,
    limite: 500,
},
{
    id:2,
    nombre: "Ecuador",
    impuesto: 2.0,
    valor: 330,
    limite: 600,
},
{
    id:3,
    nombre: "Peru",
    impuesto: 2.7,
    valor: 300,
    limite: 500,
},
{
    id:4,
    nombre: "Brasil",
    impuesto: 1.25,
    valor: 325,
    limite: 500,
},
{
    id:5,
    nombre: "Uruguay",
    impuesto: 1.25,
    valor: 325,
    limite: 500,
},
{
    id:6,
    nombre: "Bolivia",
    impuesto: 1.25,
    valor: 325,
    limite: 500,
},
{
    id:7,
    nombre: "Venezuela",
    impuesto: 1.25,
    valor: 325,
    limite: 500,
},
{
    id:8,
    nombre: "Chile",
    impuesto: 1.25,
    valor: 325,
    limite: 500,
},

];

let nombrePaises = paises.map( (pais) => pais.nombre);



let valorIngresado = prompt("Bienvenido, elige el pais al que deseas enviar dinero: " + "\n" + nombrePaises.join("\n"));

switch (valorIngresado) {
    case "colombia": console.log(paises[0]);
        
        break;
    case "ecuador": console.log(paises[1]);
        
        break;
    case "peru": console.log(paises[2]);
        
        break;

    case "brasil": console.log(paises[3]);
        
        break;
    case "uruguay": console.log(paises[4]);
        
        break;
    case "bolivia": console.log(paises[5]);
        
        break;
    case "venezuela": console.log(paises[6]);
        
        break;
    case "chile": console.log(paises[7]);
        
        break;

    default: alert("ingresa un pais valido")
        break;
}

alert("Usted ha ingresado " + valorIngresado)






























