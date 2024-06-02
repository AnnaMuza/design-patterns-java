import {Transmission} from "../classes/Transmission.class";

export class TransmissionBuilder {
    private type: 'Manual' | 'Automatic' = 'Manual';
    private gears: number = 5;

    setType(type: 'Manual' | 'Automatic'): TransmissionBuilder {
        this.type = type;
        return this;
    }

    setGears(gears: number): TransmissionBuilder {
        this.gears = gears;
        return this;
    }

    build(): Transmission {
        return new Transmission(this.type, this.gears);
    }
}
