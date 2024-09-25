// Elementos del DOM
const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const message = document.getElementById('message');
const gameArea = document.getElementById('gameArea');

// Variables de control
let playerX = 230;
let playerY = 180;
let obstacleX = Math.random() * 460;
let obstacleY = Math.random() * 360;
let gameOver = false;

// Función para mover al jugador
function movePlayer(xChange, yChange) {
    if (gameOver) return;
    playerX += xChange;
    playerY += yChange;

    // Limitar el movimiento dentro del área de juego
    playerX = Math.max(0, Math.min(playerX, 460));
    playerY = Math.max(0, Math.min(playerY, 360));

    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';

    checkCollision();
}

// Función para mover el obstáculo aleatoriamente
function moveObstacle() {
    if (gameOver) return;
    
    obstacleX = Math.random() * 460;
    obstacleY = Math.random() * 360;
    obstacle.style.left = obstacleX + 'px';
    obstacle.style.top = obstacleY + 'px';
}

// Función para detectar colisiones
function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    const areaRect = gameArea.getBoundingClientRect();

    // Detectar si hay intersección entre el jugador y el obstáculo
    if (
        playerRect.left < obstacleRect.left + obstacleRect.width &&
        playerRect.left + playerRect.width > obstacleRect.left &&
        playerRect.top < obstacleRect.top + obstacleRect.height &&
        playerRect.height + playerRect.top > obstacleRect.top
    ) {
        message.textContent = "¡Game Over! Has chocado con el obstáculo.";
        gameOver = true;
    }
}

// Eventos del teclado para mover al jugador
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            movePlayer(0, -20);
            break;
        case 'ArrowDown':
            movePlayer(0, 20);
            break;
        case 'ArrowLeft':
            movePlayer(-20, 0);
            break;
        case 'ArrowRight':
            movePlayer(20, 0);
            break;
    }
});

// Mover el obstáculo cada 1.5 segundos
setInterval(moveObstacle, 1500);
