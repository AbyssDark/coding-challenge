function sum_to_n_1(n) {
    if (!Number.isInteger(n)) {
      return "Input must be a whole number or zero.";
    }
    
    if (n < 0) {
      return "Input must be a positive number or zero.";
    }
    
    let sum = 0;
    for (let i = 1; i <= n; i++) { // iterate from 1 to n
      sum += i; // add current number to sum
    }
    return sum; // return the final sum
  }
  
  // Implementation 2
  function sum_to_n_2(n) {
    if (!Number.isInteger(n)) {
      return "Input must be a whole number or zero.";
    }
    
    if (n < 0) {
      return "Input must be a positive number or zero.";
    }
    
    return (n * (n + 1)) / 2; // calculate sum using the formula (n * (n + 1)) / 2
  }
  
  // Implementation 3
  function sum_to_n_3(n) {
    if (!Number.isInteger(n)) {
      return "Input must be a whole number or zero.";
    }
    
    if (n < 0) {
      return "Input must be a positive number or zero.";
    }
    
    if (n === 1) { // base case: if n is 1, return 1
      return 1;
    } else {
      return n + sum_to_n_3(n - 1); // recursively call the function with n-1 and add n to the result
    }
  }
  
  // Test cases
  console.log(sum_to_n_1(5)); // Expected output: 15
  console.log(sum_to_n_1(10)); // Expected output: 55
  console.log(sum_to_n_1(-3)); // Expected output: "Input must be a positive number or zero."
  console.log(sum_to_n_1(3.5)); // Expected output: "Input must be a whole number or zero."
  
  console.log(sum_to_n_2(5)); // Expected output: 15
  console.log(sum_to_n_2(10)); // Expected output: 55
  console.log(sum_to_n_2(-3)); // Expected output: "Input must be a positive number or zero."
  console.log(sum_to_n_2(3.5)); // Expected output: "Input must be a whole number or zero."
  
  console.log(sum_to_n_3(5)); // Expected output: 15
  console.log(sum_to_n_3(10)); // Expected output: 55
  console.log(sum_to_n_3(-3)); // Expected output: "Input must be a positive number or zero."
  console.log(sum_to_n_3(3.5)); // Expected output: "Input must be a whole number or zero."