let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar productos al carrito
function agregarCarrito(producto) {
    const productos = {
        'Smartphone Samsung Galaxy': 300,
        'Laptop Samsung Notebook 9': 700,
        'Tablet Samsung Galaxy Tab A7 Lite': 200,
        'Auriculares Corsair HS35': 100,
        'Reloj Inteligente Mibro Watch GS Active': 150,
        'Cámara Fotográfica Canon Rebel T100': 500,
    };
    
    if (productos[producto]) {
        const existingProductIndex = carrito.findIndex(item => item.nombre === producto);
        if (existingProductIndex > -1) {
            carrito[existingProductIndex].cantidad += 1; // Incrementa la cantidad si ya existe
        } else {
            carrito.push({ nombre: producto, precio: productos[producto], cantidad: 1 });
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        window.location.href = 'carrito.html'; // Redirige al carrito
    }
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const tbody = document.querySelector('#carrito tbody');
    tbody.innerHTML = ''; // Limpiar el contenido anterior
    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        tbody.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>
                    <button onclick="cambiarCantidad(${index}, -1)">-</button>
                    ${item.cantidad}
                    <button onclick="cambiarCantidad(${index}, 1)">+</button>
                </td>
                <td>$${item.precio}</td>
                <td>$${subtotal}</td>
                <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
            </tr>
        `;
    });

    document.getElementById('total').innerText = `Total: $${total}`;
}

// Función para cambiar la cantidad de un producto
function cambiarCantidad(index, cambio) {
    if (carrito[index].cantidad + cambio > 0) {
        carrito[index].cantidad += cambio;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Función de compra
function comprar() {
    alert('¡Gracias por tu compra!');
    vaciarCarrito();
}

// Mostrar el carrito al cargar la página
if (document.title.includes('Carrito')) {
    mostrarCarrito();
}


