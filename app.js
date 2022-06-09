//Solicito datos para el envio de dinero

let dato = prompt("Ingresa el pais al que deseas enviar dinero");
alert("Enviaras dinero a " + dato)

let monto = parseInt(prompt("Ingresa el monto"));

alert("Enviaras " + monto + " a " + dato)

//Interes por envio
const intereses = 1.5;

//Funcion que hace la operacion
function enviarDinero (n1,n2) {
    return monto * intereses;
}

//Retorno de la operacion
let resultado = enviarDinero(monto,intereses);

function impPais (n1,n2){
    return resultado + 50;
}

//Condicional: Si paga impuesto pais o no

if (monto >= 100) {
    alert("Ademas, debes pagar impuesto pais");
    alert("El total del envio con recargo es de: $" + resultado);
}

else {
    alert("Por el poco monto que envias, no pagaras impuesto pais");
}

//Muestro en consola el envio con recargo

















