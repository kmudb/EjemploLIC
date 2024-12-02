  // JSON de un solo nivel
  const Spotify = [
    { "titulo": "Canción 1", "album": "Álbum 1", "artista": "Artista 1", "duracion": "3:45", "url": "https://example.com/song1" },
    { "titulo": "Canción 2", "album": "Álbum 2", "artista": "Artista 2", "duracion": "4:20", "url": "https://example.com/song2" },
    { "titulo": "Canción 3", "album": "Álbum 3", "artista": "Artista 3", "duracion": "2:55", "url": "https://example.com/song3" }
  ];

  // Referencia al contenedor de la lista
  const listaReproduccion = document.getElementById('lista-reproduccion');

  // Generar dinámicamente la lista de reproducción usando for...in
  for (const x in Spotify) {
        const elementoLista = document.createElement('li');
        elementoLista.className = 'list-group-item d-flex align-items-center';

        // Imagen del álbum
        const imagen = document.createElement('img');
        imagen.src = "https://via.placeholder.com/50";
        imagen.alt = "Álbum";
        imagen.className = "rounded me-3";

        // Contenedor de información
        const contenedorInfo = document.createElement('div');
        contenedorInfo.className = "flex-grow-1";

        const tituloCancion = document.createElement('h5');
        tituloCancion.className = "mb-0";
        tituloCancion.textContent = Spotify[x].titulo;

        const detallesCancion = document.createElement('small');
        detallesCancion.className = "text-muted";
        detallesCancion.textContent = `Álbum: ${Spotify[x].album} • ${Spotify[x].artista}`;

        contenedorInfo.appendChild(tituloCancion);
        contenedorInfo.appendChild(detallesCancion);

        // Duración de la canción
        const duracionCancion = document.createElement('span');
        duracionCancion.className = "text-muted me-3";
        duracionCancion.textContent = Spotify[x].duracion;

        // Botón de reproducción
        const botonReproducir = document.createElement('button');
        botonReproducir.className = "btn btn-primary btn-sm";
        botonReproducir.textContent = "▶ Reproducir";
        botonReproducir.setAttribute('data-url', Spotify[x].url);

        // Añadir evento al botón
        botonReproducir.addEventListener('click', () => {
        window.location.href = Spotify[x].url;
        });

        // Ensamblar el elemento de la lista
        elementoLista.appendChild(imagen);
        elementoLista.appendChild(contenedorInfo);
        elementoLista.appendChild(duracionCancion);
        elementoLista.appendChild(botonReproducir);

        // Añadir el elemento a la lista de reproducción
        listaReproduccion.appendChild(elementoLista);
  }