import {Engine} from "./Engine.class";
import {Transmission} from "./Transmission.class";
import {Wheel} from "./Wheel.class";

export class Car {
    constructor(
        public bodyType: string,
        public engine: Engine,
        public transmission: Transmission,
        public wheels: Wheel[],
        public color: string
    ) {}
}
