 //1
// set-inaxavs unikalur mnishvnelobebs tu mashi erti da igive elements davamatebt setshi mkolod ertxel sheinaxeb


//2
let set = new Set();

//3
// pytonshi set iwereba {}it
// JavaScriptshi set iqmneba new set()it


//4
let cxolevebi = new Set();

cxolevebi.add("dzagli");
cxolevebi.add("lomi");
cxolevebi.add("kata");
cxolevebi.add("capybara");

console.log(cxolevebi.size);


//5
let players = new Set(["Alex", "Max", "Charlz"]);

if (players.has("Max")) {
    console.log("მოთამაშე მოძებნილია");
} else {
    console.log("ასეთი მოთამაშე არ არსებობს");
}


//6
let cars = new Set(["bmw", "audi", "mercedes"]);

cars.delete("mercedes");

console.log(cars.size);


//7
let qulebi = new Set([7, 8, 6, 10, 10, 9, 5]);

console.log(qulebi.size);


//8
let nums = new Set();

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        nums.add(i ** 3);
    }
}

console.log(nums.has(121));


//10
let fruits = new Set();

fruits.add("vashli");
fruits.add("banani");
fruits.add("marwyvi");
fruits.add("kiwi");
fruits.add("portoxali");

fruits.delete("apple");

console.log(fruits.has("mango"));
console.log(fruits.size);