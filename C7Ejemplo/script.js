// Array bidimensional de productos disponibles
const productosDisponibles = [
    ['Pelota', 10.00],
    ['Muñeca', 20.00],
    ['Tren', 15.00],
    ['Helicoptero', 18.00],
    ['Rompecabezas', 12.00]
];

// Array bidimensional de pedidos actuales
let pedidos = [];

// Función para llenar el select con los productos disponibles
function llenarSelects() {
    const select = document.getElementById('producto');
    let opcionesHTML = '<option value="">Seleccione un producto</option>';

    productosDisponibles.forEach(producto => {
        const [nombre, precio] = producto;
        opcionesHTML += `<option value="${precio}">${nombre}</option>`;
    });

    select.innerHTML = opcionesHTML;
}

// Función para actualizar el precio en el formulario
function actualizarPrecio() {
    const select = document.getElementById('producto');
    const precioInput = document.getElementById('precio');
    precioInput.value = select.options[select.selectedIndex].value;
}

// Función para agregar un producto al pedido
function agregarProducto() {
    const productoSelect = document.getElementById('producto');
    const cantidadInput = document.getElementById('cantidad');
    const precioInput = document.getElementById('precio');
    
    const productoNombre = productoSelect.options[productoSelect.selectedIndex].text;
    const cantidad = parseFloat(cantidadInput.value);
    const precioUnitario = parseFloat(precioInput.value);

    if (productoNombre && cantidad > 0 && precioUnitario > 0) {
        pedidos.push([productoNombre, cantidad, precioUnitario]);

        // Limpiar formulario
        productoSelect.value = '';
        cantidadInput.value = '';
        precioInput.value = '';

        // Actualizar tabla de pedidos
        generarTablaPedidos();
    } else {
        alert('Por favor, seleccione un producto válido y agregue una cantidad.');
    }
}

// Función para generar la tabla de pedidos
function generarTablaPedidos() {
    const tablaDiv = document.getElementById('tablaPedidos');
    
    let tablaHTML = '<table class="table table-bordered">';
    tablaHTML += '<thead><tr><th>Producto</th><th>Cantidad</th><th>Precio Unitario</th><th>Total</th></tr></thead>';
    tablaHTML += '<tbody>';

    let totalFactura = 0;

    pedidos.forEach(pedido => {
        const [producto, cantidad, precioUnitario] = pedido;
        const total = cantidad * precioUnitario;
        totalFactura += total;

        tablaHTML += `<tr>
                        <td>${producto}</td>
                        <td>${cantidad}</td>
                        <td>$${precioUnitario.toFixed(2)}</td>
                        <td>$${total.toFixed(2)}</td>
                      </tr>`;
    });

    tablaHTML += '</tbody></table>';

    tablaHTML +=`<h2>Total de la Factura: $${totalFactura.toFixed(2)}</h2>`;

    tablaDiv.innerHTML = tablaHTML;

    
}

// Llenar los select con los productos disponibles al cargar la página
window.onload = llenarSelects;
