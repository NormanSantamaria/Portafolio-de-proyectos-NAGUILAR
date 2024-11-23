const readline = require("readline");

// Crear una interfaz para capturar datos del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Funciones para las operaciones matemáticas
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No se puede dividir entre 0.";
  }
}

// Función principal para capturar datos
function iniciarCalculadora() {
  rl.question("Ingresa el primer número: ", (num1) => {
    rl.question("Ingresa el segundo número: ", (num2) => {
      rl.question(
        "Elige una operación (sumar, restar, multiplicar, dividir): ",
        (operacion) => {
          const a = parseFloat(num1);
          const b = parseFloat(num2);

          let resultado;

          switch (operacion.toLowerCase()) {
            case "sumar":
              resultado = sumar(a, b);
              break;
            case "restar":
              resultado = restar(a, b);
              break;
            case "multiplicar":
              resultado = multiplicar(a, b);
              break;
            case "dividir":
              resultado = dividir(a, b);
              break;
            default:
              resultado = "Operación no válida.";
          }

          console.log(`El resultado es: ${resultado}`);
          rl.close(); // Cerrar la interfaz al terminar
        }
      );
    });
  });
}

// Iniciar la calculadora
iniciarCalculadora();
