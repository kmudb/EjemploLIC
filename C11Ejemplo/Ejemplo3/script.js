// Estructura JSON para guardar los datos
let RegistroEstudiante = JSON.parse(localStorage.getItem('RegistroEstudiante')) || {};

// Referencias a elementos del DOM
const salida = document.getElementById('output');
const clearDataBtn = document.getElementById('btnEliminar');

// Función para mostrar los datos en pantalla
function mostrar_datos() {
    if (Object.keys(RegistroEstudiante).length === 0) {
        salida.textContent = "No hay registros disponibles.";
    } else {
        salida.textContent = JSON.stringify(RegistroEstudiante, null, 2);
    }
}

// Manejar el envío del formulario
document.getElementById('btnRegistrar').addEventListener('click', function (event) {
    event.preventDefault();

    const materia = document.getElementById('txtMateria').value.trim();
    const nombre = document.getElementById('txtNombre').value.trim();
    const edad = parseInt(document.getElementById('txtEdad').value.trim());

    if (!materia || !nombre || isNaN(edad)) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Si el curso no existe en el JSON, se inicializa como un array vacío
    if (!RegistroEstudiante[materia]) {
        RegistroEstudiante[materia] = [];
    }

    // Agregar alumno al curso correspondiente
    RegistroEstudiante[materia].push({ nombre, edad });

    // Guardar en Local Storage
    localStorage.setItem('RegistroEstudiante', JSON.stringify(RegistroEstudiante));

    // Mostrar los datos actualizados
    mostrar_datos();
    document.getElementById('txtMateria').value = "";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtEdad').value = "";
});

// Botón para borrar todos los datos
clearDataBtn.addEventListener('click', function () {
    if (confirm('¿Estás seguro de que deseas borrar todos los datos?')) {
        RegistroEstudiante = {};
        localStorage.removeItem('RegistroEstudiante');
        mostrar_datos();
    }
});

// Mostrar datos al cargar la página
mostrar_datos();
