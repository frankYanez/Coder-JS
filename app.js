let carrito = [];

const producto1 = new NuevoObjeto (1,"remera",100);
const producto2 = new NuevoObjeto (2,"camisa",150);
const producto3 = new NuevoObjeto (3,"pantalon",140);
const producto4 = new NuevoObjeto (4,"campera",200);
const producto5 = new NuevoObjeto (5,"chaleco",300);


let entrada = prompt("Bienvenido. Que producto te interesa? \n" + producto1.nombre + "\n" + producto2.nombre + "\n" + producto3.nombre + "\n" + producto4.nombre + "\n" + producto5.nombre);



function NuevoObjeto (id,nombre,valor){
    this.id = id;
    this.nombre = nombre;
    this.valor = valor;
}



let array = [producto1,producto2,producto3,producto4,producto5];

let encuentraProducto = array.find(el => el.nombre === entrada );

carrito.push(encuentraProducto);

console.log(carrito);






































