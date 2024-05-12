import {Wheel} from "./Wheel.class";
import {Engine} from "./Engine.class ";
import {CarBuilder} from "./CarBuilder.class";

export class Car {
  private wheels: Wheel[];
  private engine?: Engine;

  constructor(builder: CarBuilder) {
    this.wheels = builder.wheels;
    this.engine = builder.engine;
  }
}