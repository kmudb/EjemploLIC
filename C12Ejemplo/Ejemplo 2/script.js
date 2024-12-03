document.getElementById("loadData").addEventListener("click", async () => {
    const url = "https://65f9be823909a9a65b1942ac.mockapi.io/maravillas";
    const gridContainer = document.getElementById("maravillas-grid");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al cargar los datos.");
        }

        const data = await response.json();
        gridContainer.innerHTML = "";

        data.forEach((maravilla) => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";

            card.innerHTML = `
                <div class="card h-100">
                    <img src="${maravilla.imagen}" class="card-img-top" alt="${maravilla.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${maravilla.nombre}</h5>
                        <p class="card-text"><strong>País:</strong> ${maravilla.pais}</p>
                        <button class="btn btn-primary btn-sm" onclick="showDetails(${JSON.stringify(maravilla).replace(/"/g, '&quot;')})">Ver Detalles</button>
                    </div>
                </div>
            `;

            gridContainer.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        alert("Hubo un problema al cargar las maravillas.");
    }
});

function showDetails(maravilla) {
    const modalTitle = document.getElementById("maravillaModalLabel");
    const modalImage = document.getElementById("maravilla-image");
    const modalBody = document.getElementById("maravilla-details");
    const modalTips = document.getElementById("maravilla-tips");

    modalTitle.textContent = maravilla.nombre;
    modalImage.src = maravilla.imagen;
    modalBody.textContent = `Ubicación: ${maravilla.latitud}, ${maravilla.longitud}`;
    modalTips.innerHTML = maravilla.Consejos.map((consejo) => `<li>${consejo}</li>`).join("");

    const modal = new bootstrap.Modal(document.getElementById("maravillaModal"));
    modal.show();
}
