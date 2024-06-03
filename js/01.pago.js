document.addEventListener('DOMContentLoaded', function () {
    const productosCarrito = JSON.parse(localStorage.getItem('articulosCarrito')) || [];
    const contenedorPago = document.querySelector('#lista-carrito tbody');
    const contenedorTotal = document.querySelector('#precioTotal');
    let precioTotal = 0; // Inicializar el precio total

    productosCarrito.forEach(producto => {
        const row = document.createElement('tr');
        
        // Transformar el precio de formato string a número entero
        const precioNumerico = parseInt(producto.precio.replace(/[\$,\.]/g, ''));

        row.innerHTML = `
        <td><img src="${producto.imagen}" width="100"></td>
        <td>${producto.titulo}</td>
        <td class="precio">${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>$${(precioNumerico * parseInt(producto.cantidad)).toLocaleString()}</td>
        `;
        
        contenedorPago.appendChild(row);
        
        // Sumar el precio de cada producto al precio total
        precioTotal += precioNumerico * parseInt(producto.cantidad);
    });

    // Crear un elemento para mostrar el precio total
    const precioTotalElemento = document.createElement('div');
    precioTotalElemento.textContent = `$${precioTotal.toLocaleString()}`; // Mostrar el precio total
    contenedorTotal.appendChild(precioTotalElemento);
});
