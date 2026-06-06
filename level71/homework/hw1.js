//1
const person = {
    name: "barbare",
    surname: "okujava",
    age: 13
};


//2
const countries = {
    georgia: "Tbilisi",
    france: "Paris",
    germany: "Berlin"
};

//3


const car = {
    model: "porchr M4",
    engine: 4.4,
    year: 2022,
    color: "Black"
};

car.model = "Mercedes C63";

//4

const animals = {
    animal1: "vepcvi",
    animal2: "spilo",
    animal3: "maimuni",
    animal4: "capybara"
};


//5

const fruits = {
    vashli: 3,
    msxali: 4,
    atami: 5,
    kiwi: 6
};


//6

const compiuter = {
    cpu: 'inter core i9',
    windows: 11,
    ram: '8gb',
    storage: '250gb'
};


//7


const movies = {
    top1: "10 things i hate about you",
    top2: "infinity war",
    top3: "elona homes",
    top4: "Avatar",
    top5: "ver virchev"
};

//8


const user = {
    name: "babi",

    gamarjoba: function () {
        console.log("gamarjoba me var" + this.name + ".");
    }
};

user.gamarjoba();


//9
const calc = {
numi: 30,
num2: 15,
resulti: 9,
result2: 0,

plus: function() {
    this.result1 = this.numi+this.num2

},

minus: function() {
    this.result2 = this.numd-this.num2

},


tostring: function() {
console.log("plus result: " + this.results)
console.log("minus result: " + this.resultz)
}
 }


//10
const sportCar = {
    model: "CLS 63",
    engine: 5.5,
    horsepower: 450,

    upgrade: function () {
        this.engine += 2.05;
        this.horsepower += 100;
    },

    toString: function () {
        console.log(
            "manqana " +
            this.model +
            " dzravi " +
            this.engine +
            " da cxenis dzalit" +
            this.horsepower
        );
    }
}