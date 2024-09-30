document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://65f9be823909a9a65b1942ac.mockapi.io/paises';
    let idiomaActual = 'espanol';

    const gridPaises = document.getElementById('grid-paises');
    const btnEspanol = document.getElementById('btn-es');
    const btnIngles = document.getElementById('btn-en');
    const paisModal = new bootstrap.Modal(document.getElementById('paisModal'), {});

    // Elementos del modal

    const paisBandera = document.getElementById('pais-bandera');
    const paisNombre = document.getElementById('pais-nombre');
    const paisCapital = document.getElementById('pais-capital');
    const paisPoblacion = document.getElementById('pais-poblacion');
    const paisRegion = document.getElementById('pais-region');
    const paisDescipcion=document.getElementById('pais-descripcion');

    // Elementos del título
    const titulo = document.getElementById('titulo');
    const paisModalLabel = document.getElementById('paisModalLabel');
    const labelNombre = document.getElementById('label-nombre');
    const labelCapital = document.getElementById('label-capital');
    const labelPoblacion = document.getElementById('label-poblacion');
    const labelRegion = document.getElementById('label-region');
    const labelDescripcion=document.getElementById('label-descripcion');

    // Función para obtener los datos de la API usando XMLHttpRequest
    const obtenerPaises = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                const paises = JSON.parse(xhr.responseText);
                mostrarPaises(paises);
            } else {
                console.error('Error al obtener los países:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Error en la solicitud:', xhr.statusText);
        };
        xhr.send();
    };

    // Función para mostrar los países en una cuadrícula
    const mostrarPaises = (paises) => {
        gridPaises.innerHTML = ''; // Limpiar la cuadrícula
        paises.forEach(pais => {
            const col = document.createElement('div');
            col.classList.add('col-md-4', 'mb-4');

            const card = document.createElement('div');
            card.classList.add('card', 'text-center', 'h-100');

            const img = document.createElement('img');
            img.src = pais.bandera;
            img.alt = `${pais.nombre[idiomaActual]} Bandera`;
            img.classList.add('card-img-top', 'img-fluid');

            // Evento para mostrar el modal con la información
            img.addEventListener('click', () => {
                mostrarModalPais(pais);
            });

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = pais.nombre[idiomaActual];

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.textContent = pais.capital[idiomaActual];

            // Agregar la imagen y el contenido a la tarjeta
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            gridPaises.appendChild(col);
        });
    };

    // Función para mostrar el modal con la información del país
    const mostrarModalPais = (pais) => {
        paisBandera.src = pais.bandera;
        console.log(paisBandera);
        paisNombre.textContent = pais.nombre[idiomaActual];
        paisCapital.textContent = pais.capital[idiomaActual];
        paisPoblacion.textContent = pais.poblacion;
        paisRegion.textContent = pais.region[idiomaActual];
        paisDescipcion.textContent=pais.descripcion[idiomaActual];
        paisModalLabel.textContent = idiomaActual === 'espanol' ? 'Información del País' : 'Country Information';
        labelNombre.textContent = idiomaActual === 'espanol' ? 'Nombre:' : 'Name:';
        labelCapital.textContent = idiomaActual === 'espanol' ? 'Capital:' : 'Capital:';
        labelPoblacion.textContent = idiomaActual === 'espanol' ? 'Población:' : 'Population:';
        labelRegion.textContent = idiomaActual === 'espanol' ? 'Región:' : 'Region:';
        labelDescripcion.textContent = idiomaActual === 'espanol' ? 'Descripción:' : 'Description:';
        paisModal.show();
    };

    // Eventos para cambiar el idioma
    btnEspanol.addEventListener('click', () => {
        idiomaActual = 'espanol';
        refrescarIdioma();
        btnEspanol.classList.add('btn-primary');
        btnEspanol.classList.remove('btn-secondary');
        btnIngles.classList.remove('btn-primary');
        btnIngles.classList.add('btn-secondary');
    });

    btnIngles.addEventListener('click', () => {
        idiomaActual = 'ingles';
        refrescarIdioma();
        btnIngles.classList.add('btn-primary');
        btnIngles.classList.remove('btn-secondary');
        btnEspanol.classList.remove('btn-primary');
        btnEspanol.classList.add('btn-secondary');
    });

    // Función para refrescar la cuadrícula en el idioma actual
    const refrescarIdioma = async () => {
        try {
            const response = await fetch(url);
            const paises = await response.json();
            mostrarPaises(paises);
             titulo.textContent = idiomaActual === 'espanol' ? 'Países' : 'Countries';
     
        } catch (error) {
            console.error('Error al refrescar el idioma:', error);
        }
    };

    // Cargar los países inicialmente en español
    obtenerPaises();
});
