import {CarBuilder} from "./CarBuilder.class";
import {Car} from "./Car.class";

export class CarSimulator {
  private car: Car;

  constructor(builder: CarBuilder) {
    this.car = builder.build();
  }
}