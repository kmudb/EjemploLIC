// Solicitar datos al usuario
let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuál es tu edad?"));
let esEstudiante = prompt("¿Eres estudiante? (sí/no)").toLowerCase() === "sí";

// Toma de decisiones con if y else if
if (edad < 18) {
    document.getElementById('result-if').innerText = `${nombre}, eres menor de edad.`;
} else if (edad >= 18 && edad < 65) {
    document.getElementById('result-if').innerText = `${nombre}, eres adulto.`;
} else {
    document.getElementById('result-if').innerText = `${nombre}, eres mayor de 65 años.`;
}

// Toma de decisiones con switch
let dia = parseInt(prompt("Ingrese un número de día (1-7):"));
let mensajeDia;
switch (dia) {
    case 1:
        mensajeDia = "Hoy es Lunes.";
        break;
    case 2:
        mensajeDia = "Hoy es Martes.";
        break;
    case 3:
        mensajeDia = "Hoy es Miércoles.";
        break;
    case 4:
        mensajeDia = "Hoy es Jueves.";
        break;
    case 5:
        mensajeDia = "Hoy es Viernes.";
        break;
    case 6:
        mensajeDia = "Hoy es Sábado.";
        break;
    case 7:
        mensajeDia = "Hoy es Domingo.";
        break;
    default:
        mensajeDia = "Día no válido.";
}

document.getElementById('result-switch').innerText = mensajeDia;

// Decisiones múltiples basadas en estado civil y ocupación
let estadoCivil = prompt("¿Cuál es tu estado civil? (soltero/casado)").toLowerCase();
let ocupacion = prompt("¿Cuál es tu ocupación? (estudiante/profesional/otro)").toLowerCase();

if (estadoCivil === "soltero" && ocupacion === "estudiante") {
    document.getElementById('result-multiple').innerText = `${nombre}, eres un estudiante soltero.`;
} else if (estadoCivil === "casado" && ocupacion === "profesional") {
    document.getElementById('result-multiple').innerText = `${nombre}, eres un profesional casado.`;
} else {
    document.getElementById('result-multiple').innerText = `${nombre}, tu estado civil y ocupación son variados.`;
}

// Cálculos matemáticos: área de un círculo
let radio = parseFloat(prompt("Ingrese el radio de un círculo:"));
let area = Math.PI * Math.pow(radio, 2);
document.getElementById('result-calculation').innerText = `El área del círculo con radio ${radio} es ${area.toFixed(2)}.`;
