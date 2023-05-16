function number_cardinality(num) {
    if (num % 10 === 0) {
      return "zero";
    } else if (num % 10 === 5) {
      return "five";
    } else if (num % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  // Ejemplos de uso
  console.log(number_cardinality(100)); // Output: "zero"
  console.log(number_cardinality(88)); // Output: "even"
  console.log(number_cardinality(155)); // Output: "five"
  console.log(number_cardinality(99)); // Output: "odd"
  