import {Engine} from "../classes/Engine.class";

export class EngineBuilder {
    private power: number = 0;
    private volume: number = 0;
    private torque: number = 0;
    private fuelType: string = '';

    setPower(power: number): EngineBuilder {
        this.power = power;
        return this;
    }

    setVolume(volume: number): EngineBuilder {
        this.volume = volume;
        return this;
    }

    setTorque(torque: number): EngineBuilder {
        this.torque = torque;
        return this;
    }

    setFuelType(fuelType: string): EngineBuilder {
        this.fuelType = fuelType;
        return this;
    }

    build(): Engine {
        return new Engine(this.power, this.volume, this.torque, this.fuelType);
    }
}
