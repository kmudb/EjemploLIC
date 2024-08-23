let inventario = [];
let editarItem = -1; // Indica si estamos en modo de edición

// Objeto con las ubicaciones por género
const generoLocacion = {
    "Ficción": "Estante 1",
    "No Ficción": "Estante 2",
    "Misterio": "Estante 3",
    "Biografía": "Estante 4",
    "Ciencia": "Estante 5",
    "Fantasía": "Estante 6"
};

// Elementos del DOM
const selectGenero = document.getElementById('genre');
const locacion = document.getElementById('location');
const formularioInventario = document.getElementById('inventoryForm');
const listaInventario = document.getElementById('inventoryList');
const tituloInput = document.getElementById('title');
const autorInput = document.getElementById('author');
const anioInput = document.getElementById('year');

selectGenero.addEventListener('change', updateLocation);
document.addEventListener('DOMContentLoaded', llenarSelectLocacion);
formularioInventario.addEventListener('submit', AgregarOAcutalizarLibro);
listaInventario.addEventListener('click', accionesInventario);

function updateLocation() {
    const genero = selectGenero.value;

    if(genero!=0){
        document.getElementById("location").value=generoLocacion[genero];
    }else{
        document.getElementById("location").value="";
    }
}

function llenarSelectLocacion() {
    // Limpiar las opciones actuales
    locacion.innerHTML = '';

    // Llenar el select con todas las ubicaciones posibles
    for (const genero in generoLocacion) {
        const option = document.createElement('option');
        option.value = generoLocacion[genero];
        option.textContent = `${genero}: ${generoLocacion[genero]}`;
        locacion.appendChild(option);
    }
}

function AgregarOAcutalizarLibro(e) {
    e.preventDefault();

    const title = tituloInput.value;
    const author = autorInput.value;
    const year = anioInput.value;
    const genre = selectGenero.value;
    const location = locacion.value;

    const book = { title, author, year, genre, location };

    if (editarItem === -1) {
        // Modo agregar
        inventario.push(book);
        verLibroInventario(book);
    } else {
        // Modo actualizar
        inventario[editarItem] = book;
        actualizarListaInventario();
        editarItem = -1;
    }

    formularioInventario.reset();
    locacion.innerHTML = '';  // Limpiar la selección de ubicación después de registrar/actualizar el libro
    llenarSelectLocacion();  // Llenar el select de nuevo para que muestre todas las opciones posibles
}

function verLibroInventario(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.genre}</td>
        <td>${book.location}</td>
        <td>
            <button class="btn btn-info btn-sm edit">Actualizar</button>
            <button class="btn btn-danger btn-sm delete">Eliminar</button>
        </td>
    `;
    listaInventario.appendChild(row);
}

function actualizarListaInventario() {
    listaInventario.innerHTML = '';
    inventario.forEach(book => verLibroInventario(book));
}

function accionesInventario(e) {
    if (e.target.classList.contains('delete')) {
        eliminarLibroInventario(e);
    } else if (e.target.classList.contains('edit')) {
        editarLibroInventario(e);
    }
}

function eliminarLibroInventario(e) {
    const rowIndex = e.target.parentElement.parentElement.rowIndex - 1;
    inventario.splice(rowIndex, 1);
    actualizarListaInventario();
}

function editarLibroInventario(e) {
    const rowIndex = e.target.parentElement.parentElement.rowIndex - 1;
    const book = inventario[rowIndex];

    // Cargar los valores en el formulario desde el arreglo inventario
    tituloInput.value = book.title;
    autorInput.value = book.author;
    anioInput.value = book.year;
    selectGenero.value = book.genre;
    locacion.value = book.location;
    
    editarItem = rowIndex;
}
