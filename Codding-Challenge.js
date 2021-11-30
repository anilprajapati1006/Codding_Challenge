// Write an application that outputs all numbers from 1 to 100. For every multiple of three write “Clever” instead of the number, for every multiple of five write “Push”. For numbers that are both a multiple of three and five, write “CleverPush”.

let number = parseInt(prompt("Enter a number : ")); // 100

const cleverPush = (num) => {
  if (num > 0) {
    cleverPush(num - 1);
    if (num % 3 == 0 && num % 5 == 0) {
      console.log("CleverPush");
    } else if (num % 3 == 0) {
      console.log("Clever");
    } else if (num % 5 == 0) {
      console.log("Push");
    } else {
      console.log(num);
    }
  }
};

cleverPush(number);
