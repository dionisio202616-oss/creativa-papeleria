
let carrito = [];

function agregar(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
    alert("Producto agregado correctamente.");
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    const contador = document.getElementById("contador");

    lista.innerHTML = "";
    let suma = 0;

    carrito.forEach((producto, indice) => {
        suma += producto.precio;

        lista.innerHTML += `
            <p>
                ${producto.nombre} - $${producto.precio.toFixed(2)}
                <button onclick="eliminar(${indice})">
                    Eliminar
                </button>
            </p>
        `;
    });

    total.textContent = suma.toFixed(2);
    contador.textContent = carrito.length;
}

function eliminar(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    document.getElementById("mensaje-pedido").textContent = "";
}

function finalizarCompra() {
    const mensaje = document.getElementById("mensaje-pedido");

    if (carrito.length === 0) {
        mensaje.textContent = "Tu carrito está vacío. Agrega productos.";
        return;
    }

    const total = carrito.reduce(
        (suma, producto) => suma + producto.precio, 0
    );

    mensaje.textContent =
        "¡Gracias por tu compra! Total del pedido: $" +
        total.toFixed(2) +
        ". Nos comunicaremos para coordinar la entrega.";
}
