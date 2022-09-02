let taskNumber = +prompt("We have two tasks. Which one do you want to solve?");
switch (taskNumber) {
  case 1:
    let number1 = +prompt("We will find the sum of numbers from the range you specified. Please enter the start date of the range: ");
    let number2 = +prompt("Please enter the end date of the range: ");
    let isNumber1Invalid = isNaN(number1);
    let isNumber2Invalid = isNaN(number2);
    if (isNumber1Invalid || isNumber2Invalid) {
      alert("Some of the numbers you entered is not a number!")
    } else {
      let sum = 0;
      for (let i = number1; i <= number2; i++) {
        sum += i;
      }
      alert(`Result is: ${sum}`)
    } break;
  case 2:
    let n = +prompt("We'll be looking for the next prime number after the one you enter! Enter some number: ");
    let isNumber3Invalid = isNaN(n);
    if (isNumber3Invalid) {
      alert("Hey! The number you entered is not a number!")
    } else {
      nextPrime:
        for (let i = n + 1;; i++) {
          for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
          }
          alert(`You entered the number ${n}, the next prime number is ${i}!`);
          break;
        }
    } break;
  default:
    alert("Hey! I said we only have two!")
}
