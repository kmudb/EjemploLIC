// Elementos del DOM
const mouseArea = document.getElementById('mouseArea');
const output = document.getElementById('output');
const keyboardInput = document.getElementById('keyboardInput');

// Eventos del Mouse
mouseArea.addEventListener('click', () => {
    output.textContent = 'Hiciste clic en el área';
});

mouseArea.addEventListener('dblclick', () => {
    output.textContent = 'Hiciste doble clic en el área';
});

mouseArea.addEventListener('mousemove', (e) => {
    output.textContent = `Mouse movido en el área: X=${e.clientX}, Y=${e.clientY}`;
});

mouseArea.addEventListener('mouseover', () => {
    output.textContent = 'Pasaste el mouse sobre el área';
    mouseArea.classList.add('mouseover-effect');
});

mouseArea.addEventListener('mouseout', () => {
    mouseArea.classList.remove('mouseover-effect');
});

mouseArea.addEventListener('mouseup', () => {
    output.textContent = 'Soltaste el botón del mouse en el área';
    mouseArea.classList.add('mouseup-effect');
});

mouseArea.addEventListener('mousedown', () => {
    mouseArea.classList.remove('mouseup-effect');
});

// Eventos del Teclado
keyboardInput.addEventListener('keydown', (e) => {
    output.textContent = `Tecla presionada: ${e.key}`;
});

keyboardInput.addEventListener('keyup', (e) => {
    output.textContent = `Soltaste la tecla: ${e.key}`;
});

keyboardInput.addEventListener('keypress', (e) => {
    output.textContent = `Tecla ingresada: ${e.key}`;
});