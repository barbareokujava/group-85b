const car = {
    brand:"Toyota",
    model:"Camry",
    year: 6767,
    color:"black",
    speed:0
};

console.log(car);


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "black",
  speed: 0,

  speedUp: function () {
    this.speed += 10;
  },

  
  slowDown: function () {
    this.speed -= 10;

    if (this.speed < 0) {
      this.speed = 0;
    }
  },
};


car.speedUp();
car.slowDown();
car.slowDown();

console.log(car.speed);



const car = {
    brand:"Toyota",
    model:"Camry",
    year: 6767,
    color:"black",
    speed:0
};
car.color = "თეთრი";
car.year = 2024;

console.log(car);