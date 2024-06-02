import {Prototype} from "../types";

export class Wheel implements Prototype<Wheel> {
    constructor(
        public material: 'Steel' | 'Alloy',
        public diameter: number
    ) {}

    clone(): Wheel {
        return new Wheel(this.material, this.diameter);
    }
}
