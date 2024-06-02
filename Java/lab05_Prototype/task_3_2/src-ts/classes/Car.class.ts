import {Engine} from "./Engine.class";
import {Transmission} from "./Transmission.class";
import {Wheel} from "./Wheel.class";
import {Prototype} from "../types";

export class Car implements Prototype<Car> {
    constructor(
        public bodyType: string,
        public engine: Engine,
        public transmission: Transmission,
        public wheels: Wheel[],
        public color: string
    ) {}

    clone(): Car {
        return new Car(
          this.bodyType,
          this.engine.clone(),
          this.transmission.clone(),
          this.wheels.map(wheel => wheel.clone()),
          this.color
        );
    }
}
