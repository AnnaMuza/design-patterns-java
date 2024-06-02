import {Transmission} from "./classes/Transmission.class";
import {Engine} from "./classes/Engine.class";
import {Wheel} from "./classes/Wheel.class";
import {Car} from "./classes/Car.class";

const originalEngine = new Engine(150, 2.0, 200, "Petrol");
const originalTransmission = new Transmission("Automatic", 6);
const originalWheels = [
  new Wheel("Alloy", 17),
  new Wheel("Alloy", 17),
  new Wheel("Alloy", 17),
  new Wheel("Alloy", 17)
];
const originalCar = new Car("Sedan", originalEngine, originalTransmission, originalWheels, "Red");

const clonedCar = originalCar.clone();

console.log("Original Car:", originalCar);
console.log("Cloned Car:", clonedCar);

clonedCar.color = "Blue";
clonedCar.engine.power = 180;

console.log("After modification:");
console.log("Original Car:", originalCar);
console.log("Cloned Car:", clonedCar);
