// Función para sumar
function sumar(a, b) {
    return a + b;
  }
  
  // Función para restar
  function restar(a, b) {
    return a - b;
  }
  
  // Función para multiplicar
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Función para dividir
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "No se puede dividir entre 0.";
    }
  }
  
  // Pruebas
  console.log("Suma: " + sumar(10, 5));         // 15
  console.log("Resta: " + restar(10, 5));       // 5
  console.log("Multiplicación: " + multiplicar(10, 5)); // 50
  console.log("División: " + dividir(10, 5));   // 2
  console.log("División: " + dividir(10, 0));   // No se puede dividir entre 0.
  