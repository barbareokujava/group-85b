//1
let numbers = [1,2,3,4,5,6,7,8,9,10];

let odd = [];
let even = [];

for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] % 2 === 0) {
        even.push(numbers[a]);
    } else {
        odd.push(numbers[a]);
    }
}

console.log(odd);
console.log(even);



//2

let fruits = ["apple", "orange", "mango", "dragonfruit", "banana", "lemon"];
let fruit = "kiwi";

let found = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === fruit) {
        found = true;
        break;
    }
}

console.log(found);


//3
function dadebiti_uaryopiti(arr) {
    let positive = 0;
    let negative = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive=positive+arr[i];
        } else {
            negative= negative+ arr[i];
        }
    }

    console.log(positive );
    console.log(negative);
}

let numbers = [10, 20, -5, 10, 2, 3, -50, -20, -11, 1];

dadebiti_uaryopiti(num);