// 1)
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Giorgi");


// 2)
function umciresinum(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(min);
}

umciresinum([2, 10, -20, 100, 90, 50, 40]);


// 3)
function numbers(num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num % 2 === 0) {
    console.log(num ** 3);
  } else {
    console.log(num ** 2);
  }
}

numbers(5);
numbers(4);
numbers(0);


// 4)
function pasi(price, discount) {
  let result = price - (price * discount) / 100;

  console.log(result);
}

pasi(100, 20);


// 5)
function sumNumbers(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i] ** 2;
    } else {
      oddSum += arr[i] ** 3;
    }
  }

  console.log("Even Sum:", evenSum);
  console.log("Odd Sum:", oddSum);
}

sumNumbers([1,2,3,4,5,6,7,8,9,10]);