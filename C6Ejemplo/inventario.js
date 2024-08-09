// Array principal que almacenará los productos como sub-arreglos
let inventario = [];

// Función para validar y procesar la entrada
function validarYProcesar() {
    let formulario = document.getElementById("formularioProducto");

    // Verifica si el formulario es válido
    if (formulario.checkValidity()) {
        agregarOActualizarProducto();
    } else {
        formulario.classList.add('was-validated');
    }
}

// Función para agregar o actualizar un producto en el inventario
function agregarOActualizarProducto() {
    let id = document.getElementById("idProducto").value;
    let nombre = document.getElementById("nombreProducto").value;
    let categoria = document.getElementById("categoriaProducto").value;
    let cantidad = document.getElementById("cantidadProducto").value;
    let precio = document.getElementById("precioProducto").value;

    // Busca si el producto ya existe en el inventario (si el ID ya está en algún sub-arreglo)
    let indice = inventario.findIndex(producto => producto[0] == id);

    if (indice === -1) {
        // Si el producto no existe, se agrega un nuevo sub-arreglo al inventario
        inventario.push([id, nombre, categoria, cantidad, precio]);
        alert("Producto agregado: " + nombre);
    } else {
        // Si el producto ya existe, se actualizan los valores en el sub-arreglo correspondiente
        inventario[indice] = [id, nombre, categoria, cantidad, precio];
        alert("Producto actualizado: " + nombre);
    }

    limpiarFormulario();
}

// Función para mostrar todos los productos en el inventario en una tabla
function mostrarInventario() {
    let tablaInventario = document.getElementById("tablaInventario");
    tablaInventario.innerHTML = "";

    inventario.forEach(producto => {
        let fila = document.createElement("tr");

        producto.forEach(dato => {
            let celda = document.createElement("td");
            celda.textContent = dato;
            fila.appendChild(celda);
        });

        tablaInventario.appendChild(fila);
    });
}

// Función para eliminar un producto del inventario
function eliminarProducto() {
    let id = document.getElementById("idProducto").value;
    let indice = inventario.findIndex(producto => producto[0] == id);
    
    if (indice !== -1) {
        alert("Producto eliminado: " + inventario[indice][1]);
        inventario.splice(indice, 1);
    } else {
        alert("Producto con ID: " + id + " no encontrado.");
    }

    limpiarFormulario();
}

// Función para limpiar el formulario después de agregar o actualizar un producto
function limpiarFormulario() {
    document.getElementById("idProducto").value = "";
    document.getElementById("nombreProducto").value = "";
    document.getElementById("categoriaProducto").value = "";
    document.getElementById("cantidadProducto").value = "";
    document.getElementById("precioProducto").value = "";

    let formulario = document.getElementById("formularioProducto");
    formulario.classList.remove('was-validated');
}
