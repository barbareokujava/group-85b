function LicensePlate(plateNum) {
  return { plateNum };
}


function CreateCar(manufacturer, model, year, plateNum) {
  return {
    manufacturer, model, year,
    plate: LicensePlate(plateNum)
  };
}


const CarPark = {
  parkedCars: [],

  Park(car) {
    if (this.parkedCars.length >= this.capacity) return false;

    for (let i of this.parkedCars) {
      if (i.plate.plateNum === car.plate.plateNum) return "isidac dgas";
    }

    this.parkedCars.push(car);
    return true;
  },

  UnPark(plateNum) {
    for (let i=0; i < this.parkedCars.length; i++) {
      if (this.parkedCars[i].plate.plateNum === plateNum) {
        this.parkedCars.splice(i,1);
        return true;
      }
    }
    return false;
  }
};


const bmw = CreateCar("BMW", "M11", 2022, "AA-676-AA");

console.log(CarPark.Park(bmw)); 
console.log(CarPark.Park(bmw));
console.log(CarPark.UnPark("AA-676-AA"));
console.log(CarPark.UnPark("BB-777-BB"));