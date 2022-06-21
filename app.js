let carrito = [];

const search = document.getElementById('search');
const contenedor = document.getElementById ('contenedor');

function todosLosProductos(){

    catalogo.forEach(el => {
        let div = document.createElement('div')

        div.className = 'producto'

        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
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
          <a href="#" class="card-link">Añadir al Carrito</a>
        </div>
      </div>`

      contenedor.appendChild(div)
    })
};

console.log(contenedor);







































