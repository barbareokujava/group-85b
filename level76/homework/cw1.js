//1. let fruits = ['apple', 'banana', 'cherry']; - გამოიტანეთ პირველი და ბოლო ელემენტები


let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//2.let items = [10, 20, 30, 40]; - გამოიტანეთ ელემენტების რაოდენობა'

let items = [10, 20, 30, 40];

console.log(items.length);


//3.let animals = ['cat', 'dog']; - დაამატეთ ჟირაფი სიის ბოლოში

let animals = ['cat', 'dog'];

animals.push('girafi');

console.log(animals);

//4.let numbers = [1, 2, 3]; - ამოშალეთ ბოლო ელემენტი მასივიდან

let numbers = [1, 2, 3];

numbers.pop(2);

console.log(numbers);


//5.let queue = ['Alice', 'Bob', 'Charlie']; - ამოშალეთ პირველი ელემენტი სიაში

let queue = ['Alice', 'Bob', 'Charlie'];

queue.shift();

console.log(queue);


//6.let colors = ['green', 'blue']; - დაამატეთ წითელი სიის დასაწყისში

let colors = ['green', 'blue'];

colors.unshift('red');

console.log(colors);


//7.let scores = [10, 20, 30]; - გამოიტანეთ ყველა ელემენტი სათითაოდ კონსოლში

let scores = [10, 20, 30];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

//8.let names = ['Alice', 'Bob']; - მიიღეთ შედეგი: Hello Alice!, Hello Bob!


let names = ['Alice', 'Bob'];

for (let i = 0; i < names.length; i++) {
    console.log("Hello " + names[i] + "!");
}


//9.let prices = [1, 2, 3]; - გაამრავლეთ ყველა ელემენტი ორზე

let prices = [1, 2, 3];

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 2;
}

console.log(prices);


//10.


let items = [5, 10, 15];

let sum = 0;

for (let i = 0; i < items.length; i++) {
    sum = sum + items[i];
}

console.log(sum);