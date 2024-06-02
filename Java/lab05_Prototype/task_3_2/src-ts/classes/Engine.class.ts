import {Prototype} from "../types";

export class Engine implements Prototype<Engine> {
    constructor(
        public power: number,
        public volume: number,
        public torque: number,
        public fuelType: string
    ) {}

    clone(): Engine {
        return new Engine(this.power, this.volume, this.torque, this.fuelType);
    }
}
