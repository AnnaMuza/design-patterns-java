import {Wheel} from "./Wheel.class";
import {Engine} from "./Engine.class ";
import {Car} from "./Car.class";

export class CarBuilder {
  public wheels: Wheel[];
  public engine?: Engine;

  constructor() {
    this.wheels = [];
  }

  addWheel(wheel: Wheel) {
    this.wheels.push(wheel);
  }

  setEngine(engine: Engine) {
    this.engine = engine;
  }

  build(): Car {
    return new Car(this);
  }
}