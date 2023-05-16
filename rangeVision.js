function range_vision(number) {
    var digits = Array.from(String(number), Number); // Convertir el número en un array de dígitos
    var minValue = Infinity; // Valor mínimo de visión
  
    // Calcular el valor de visión para cada dígito
    for (var i = 0; i < digits.length; i++) {
      var leftDigits = digits.slice(0, i).reverse(); // Dígitos a la izquierda
      var rightDigits = digits.slice(i + 1); // Dígitos a la derecha
      var visionValue = digits[i] + sumArray(leftDigits) + sumArray(rightDigits); // Valor de visión
  
      if (visionValue < minValue) {
        minValue = visionValue;
      }
    }
  
    // Comprobar si hay un dígito 1 con el valor de visión mínimo
    for (var i = 0; i < digits.length; i++) {
      if (digits[i] === 1) {
        var leftDigits = digits.slice(0, i).reverse();
        var rightDigits = digits.slice(i + 1);
        var visionValue = digits[i] + sumArray(leftDigits) + sumArray(rightDigits);
        if (visionValue === minValue) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Función auxiliar para sumar los elementos de un array
  function sumArray(arr) {
    return arr.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  }
  
  // Ejemplo de uso
  console.log(range_vision(34315)); // Output: true
  