// Array de alumnos en formato JSON con fotografía
const alumnos = [
  {
    id: 1,
    nombre: "Juan Pérez",
    edad: 20,
    carrera: "Ingeniería en Computación",
    foto: "https://via.placeholder.com/150" // URL de ejemplo para la fotografía
  },
  {
    id: 2,
    nombre: "María López",
    edad: 22,
    carrera: "Diseño Gráfico",
    foto: "https://via.placeholder.com/150" // URL de ejemplo para la fotografía
  },
  {
    id: 3,
    nombre: "Carlos Martínez",
    edad: 21,
    carrera: "Administración de Empresas",
    foto: "https://via.placeholder.com/150" // URL de ejemplo para la fotografía
  }
];

// Guardar el array en localStorage
localStorage.setItem("alumnosLocal", JSON.stringify(alumnos));

// Recuperar los datos de localStorage
const alumnosLocal = JSON.parse(localStorage.getItem("alumnosLocal"));

// Seleccionar el contenedor donde se mostrarán las tarjetas
const alumnosContainer = document.getElementById("alumnosContainer");

// Función para crear tarjetas
function mostrarAlumnosEnCards(alumnos) {
  alumnos.forEach(alumno => {
    // Crear la estructura HTML para cada card
    const card = `
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="${alumno.foto}" class="card-img-top" alt="Foto de ${alumno.nombre}">
            <div class="card-body">
              <h5 class="card-title">${alumno.nombre}</h5>
              <p class="card-text"><strong>Edad:</strong> ${alumno.edad}</p>
              <p class="card-text"><strong>Carrera:</strong> ${alumno.carrera}</p>
            </div>
          </div>
        </div>
      `;
    // Insertar la card en el contenedor
    alumnosContainer.innerHTML += card;
  });
}

// Mostrar los alumnos en las tarjetas
mostrarAlumnosEnCards(alumnosLocal);
