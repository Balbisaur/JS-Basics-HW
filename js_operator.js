// Task 1: Declaring variables to store two numeric values
let num1;
let num2;

// Task 2: Assigning values to the variables
num1 = 15;
num2 = 7;

// Task 3: Displaying the sum, difference, product and quotient of the two numbers
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Update the values of the variables
num1 += 5;
num2 -= 3;
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Checking if the two numbers are equal, greater than or less than each other
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Task 6: checking if the two numbers are not equal, greater than or equal to each other
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);