// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const pagarCarritoBtn = document.querySelector('#pagar-carrito');
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarCurso);

     // Cuando se elimina un producto del carrito
     carrito.addEventListener('click', eliminarCurso);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

     // Al Vaciar el carrito
     pagarCarritoBtn.addEventListener('click', pagarCarrito);

}




// Funciones
// Función que añade el producto al carrito
function agregarCurso(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if (e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;
          // Enviamos el producto seleccionado para tomar sus datos
          leerDatosCurso(producto);
     }
}

// Lee los datos del producto
function leerDatosCurso(producto) {
     const infoCurso = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('h4').textContent,
          precio: producto.querySelector('.precio').textContent,
          id: producto.querySelector('a').getAttribute('data-id'),
          cantidad: 1
     }


     if (articulosCarrito.some(producto => producto.id === infoCurso.id)) {
          const productos = articulosCarrito.map(producto => {
               if (producto.id === infoCurso.id) {
                    producto.cantidad++;
                    return producto;
               } else {
                    return producto;
               }
          })
          articulosCarrito = [...productos];
     } else {
          articulosCarrito = [...articulosCarrito, infoCurso];
     }

     console.log(articulosCarrito)



     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el producto del carrito en el DOM
function eliminarCurso(e) {
     e.preventDefault();
     if (e.target.classList.contains('borrar-producto')) {
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')

          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== cursoId);

          carritoHTML();
     }
}


// Muestra el producto seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(producto => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${producto.imagen}" width=100>
               </td>
               <td>${producto.titulo}</td>
               <td>${producto.precio}</td>
               <td>${producto.cantidad} </td>
               <td>
                    <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

// Elimina los productos del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';

     // forma rapida (recomendada)
     while (contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}

// <!---------------------------------------------------------------->
// <!---------------- DATOS EN CRUDO PARA TEST ---------------------->
// <!---------------------------------------------------------------->

// const articulosCarrito2 = [
//      { id: 1, nombre: "Producto 1", precio: 100, cantidad: 2, imagen: "img/producto1.jpg" },
//      { id: 2, nombre: "Producto 2", precio: 200, cantidad: 1, imagen: "img/producto2.jpg" }
//  ];
//  localStorage.setItem('articulosCarrito2', JSON.stringify(articulosCarrito2));

// <!---------------------------------------------------------------->
// <!----------- GUARDANDO PRODUCTOS LOCALSTORAGE ------------------->
// <!---------------------------------------------------------------->
// Función para obtener el carrito de localStorage
function obtenerCarritoDeLocalStorage() {
     return JSON.parse(localStorage.getItem('articulosCarrito')) || [];
 }
 
// Función para pagar el carrito
function pagarCarrito() {
     // Obtener el carrito actualizado de la variable articulosCarrito
     const carrito = articulosCarrito;
 
     // Guardar el carrito en localStorage
     localStorage.setItem('articulosCarrito', JSON.stringify(carrito));
     
     // Redirigir a la página de pago
     window.location.href = 'pago.html';
 }
 
 
 





