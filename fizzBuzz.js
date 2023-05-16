function fizz_buzz(N) {
  var result = [];
  for (var i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

// Ejemplos de uso
console.log(fizz_buzz(2)); // Output: [1, 2]
console.log(fizz_buzz(5)); // Output: [1, 2, "Fizz", 4, "Buzz"]
console.log(fizz_buzz(9)); // Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz"]
console.log(fizz_buzz(15)); // Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
