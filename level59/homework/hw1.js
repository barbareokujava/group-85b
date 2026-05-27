// 1)
let numbers = [1, 15, 8, 22, 5, 30];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    console.log(numbers[i]);
  }
}


// 2)
let cities = ["თბილისი", "ქუთაისი", "ბათუმი"];

for (let i = 0; i < cities.length; i++) {
  console.log("მე ვცხოვრობ: " + cities[i]);
}


// 3)
let names = ["Giorgi", "Nika", "Ana", "Luka"];

let userName = prompt("შეიყვანე სახელი:");
let index = names.indexOf(userName);

console.log(index);


// 4)
let arr = [10, 20, 30, 40, 50];

let sum = arr[0] + arr[arr.length - 1];

console.log(sum);


// 5)
let nums = [1, 2, 3, 4, 5];

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}


// 6)
let numbers2 = [5, -3, 10, -7, -1, 8];
let count = 0;

for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] < 0) {
    count++;
  }
}

console.log(count);