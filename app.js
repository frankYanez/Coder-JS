let carrito = [];

const search = document.getElementById('search');
const contenedor = document.getElementById ("contenedor");
const seleColor = document.getElementById ("seleColor");
const carritoCompras = document.getElementById("carrito")

seleColor.addEventListener('change',()=>{
  console.log(seleColor.value);
  if(seleColor.value == 'todos'){
    todosLosProductos(catalogo)
  } else {
    todosLosProductos(catalogo.filter(el => el.color == seleColor.value))
  }
});




todosLosProductos(catalogo);



function todosLosProductos(array){



  contenedor.innerHTML = "";



    array.forEach(el => {
        let div = document.createElement('div')

        div.className = 'producto'

        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">¡Adquiere el tuyo ahora!</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${el.color}</li>
          <li class="list-group-item">${el.Precio}</li>
          <li class="list-group-item">${el.stock}</li>
        </ul>
        <div class="card-body">
          <a id="boton ${el.id}" href="#" class="card-link">Añadir al Carrito</a>
        </div>
      </div>`

      contenedor.appendChild(div)

      let btnAgregar = document.getElementById(`boton ${el.id}`);

      btnAgregar.addEventListener('click', ()=>{
        agregarCarrito(el.id);
      });
    })

};

function agregarCarrito(id){
  let agregarProducto = catalogo.find(el => el.id == id)
  console.log(agregarProducto);
  carrito.push(agregarProducto);

  mostrarCarrito(agregarProducto);
}


function mostrarCarrito(agregarProducto){
  let div = document.createElement('div')

  div.innerHTML= `<p>${agregarProducto.nombre}</p>
  <p>Precio: ${agregarProducto.Precio}</p>
  <button class="btn-eliminar btn-dark text-danger">Borrar</button>`

  carritoCompras.appendChild(div);
};









































