const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// Configuración inicial
const player = { x: 50, y: 250, width: 100, height: 100, isJumping: false };
const obstacles = [];
let isGameOver = false;
let score = 0;

// Cargar la imagen de Mario
const marioImage = new Image();
marioImage.src = "mario.png"; // Asegúrate de que el archivo esté en el mismo directorio

// Control del salto
function jump() {
    if (player.isJumping) return;
    player.isJumping = true;

    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight >= 100) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    player.isJumping = false;
                }
                jumpHeight -= 5;
                player.y += 5;
            }, 20);
        }
        jumpHeight += 5;
        player.y -= 5;
    }, 20);
}

// Crear obstáculos
function createObstacle() {
    const obstacle = { x: canvas.width, y: 300, width: 40, height: 50 };
    obstacles.push(obstacle);
}

// Dibujar el jugador
function drawPlayer() {
    ctx.drawImage(marioImage, player.x, player.y, player.width, player.height);
}

// Dibujar obstáculos
function drawObstacles() {
    ctx.fillStyle = "brown";
    obstacles.forEach((obstacle, index) => {
        obstacle.x -= 5;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Detectar colisiones
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {
            isGameOver = true;
            alert(`¡Game Over! Puntuación: ${score}`);
            document.location.reload();
        }

        // Eliminar obstáculos fuera de pantalla
        if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(index, 1);
            score++;
        }
    });
}

// Dibujar el fondo y la puntuación
function drawBackground() {
    ctx.fillStyle = "#8B4513"; // Suelo
    ctx.fillRect(0, 350, canvas.width, 50);
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Puntuación: ${score}`, 10, 30);
}

// Bucle del juego
function gameLoop() {
    if (isGameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawPlayer();
    drawObstacles();

    requestAnimationFrame(gameLoop);
}

// Iniciar el juego
setInterval(createObstacle, 1500);
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
        jump();
    }
});
gameLoop();
