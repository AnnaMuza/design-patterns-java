import {Prototype} from "../types";

export class Transmission implements Prototype<Transmission> {
    constructor(
        public type: 'Manual' | 'Automatic',
        public gears: number
    ) {}

    clone(): Transmission {
        return new Transmission(this.type, this.gears);
    }
}
