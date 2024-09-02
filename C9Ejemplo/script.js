// Función para mostrar mensajes explicativos
function showMessage(message) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = message;
}

// DOM Level 0: Manipulación directa de estilo y contenido
const btn1 = document.getElementById('btn1');
btn1.onclick = function() {
    showMessage('DOM Level 0: Este botón cambia el color de fondo y el contenido de un párrafo existente.');
    
    // Manipular un párrafo existente
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Este párrafo fue modificado por un evento DOM Level 0.';
    paragraph.style.backgroundColor = 'lightblue';
    paragraph.style.padding = '10px';
    document.getElementById('objectContainer').appendChild(paragraph);
};

// DOM Level 1: Creación de un nuevo elemento y cambio de propiedades
const btn2 = document.getElementById('btn2');
btn2.onclick = function() {
    showMessage('DOM Level 1: Este botón crea un nuevo div y lo convierte en un cuadro de colores que cambia su tamaño.');

    // Crear un div nuevo y cambiar su tamaño
    const newDiv = document.createElement('div');
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.backgroundColor = 'purple';
    newDiv.style.margin = 'auto';
    
    // Cambiar el tamaño al hacer clic
    newDiv.onclick = function() {
        newDiv.style.width = '150px';
        newDiv.style.height = '150px';
    };
    
    document.getElementById('objectContainer').appendChild(newDiv);
};

// DOM Level 2: Uso de addEventListener para manejar múltiples eventos
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function() {
    showMessage('DOM Level 2: Este botón agrega un cuadro interactivo que cambia de color y posición con eventos distintos.');

    // Crear un cuadro interactivo
    const interactiveBox = document.createElement('div');
    interactiveBox.style.width = '100px';
    interactiveBox.style.height = '100px';
    interactiveBox.style.backgroundColor = 'orange';
    interactiveBox.style.margin = 'auto';
    interactiveBox.style.transition = 'all 0.3s ease';
    
    // Cambiar color al pasar el mouse
    interactiveBox.addEventListener('mouseover', function() {
        interactiveBox.style.backgroundColor = 'red';
    });
    
    // Cambiar posición al hacer clic
    interactiveBox.addEventListener('click', function() {
        interactiveBox.style.transform = 'translateY(20px)';
    });

    document.getElementById('objectContainer').appendChild(interactiveBox);
});

// Simulación de DOM Level 3: Delegación de eventos en elementos dinámicos
document.querySelector('.button-container').addEventListener('click', function(event) {
    if (event.target && event.target.id === 'btn4') {
        showMessage('Simulación de Level 3: Este botón agrega múltiples botones que se eliminan al hacer clic.');

        // Crear múltiples botones dinámicos
        for (let i = 0; i < 3; i++) {
            const newButton = document.createElement('button');
            newButton.className = 'btn btn-warning mt-2';
            newButton.innerText = `Botón Dinámico ${i+1} (Level 3)`;
            
            // Eliminar botón al hacer clic
            newButton.addEventListener('click', function() {
                newButton.remove();
            });

            document.getElementById('objectContainer').appendChild(newButton);
        }
    }
});
