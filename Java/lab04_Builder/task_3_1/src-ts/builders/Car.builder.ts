import {Transmission} from "../classes/Transmission.class";
import {Engine} from "../classes/Engine.class";
import {EngineBuilder} from "./Engine.builder";
import {TransmissionBuilder} from "./Transmission.builder";
import {Wheel} from "../classes/Wheel.class";
import {WheelBuilder} from "./Wheel.builder";
import {Car} from "../classes/Car.class";

export class CarBuilder {
    private bodyType: string = 'Sedan';
    private engine: Engine = new EngineBuilder().build();
    private transmission: Transmission = new TransmissionBuilder().build();
    private wheels: Wheel[] = Array(4).fill(new WheelBuilder().build());
    private color: string = 'White';

    setBodyType(bodyType: string): CarBuilder {
        this.bodyType = bodyType;
        return this;
    }

    setEngine(engine: Engine): CarBuilder {
        this.engine = engine;
        return this;
    }

    setTransmission(transmission: Transmission): CarBuilder {
        this.transmission = transmission;
        return this;
    }

    setWheels(wheels: Wheel[]): CarBuilder {
        this.wheels = wheels;
        return this;
    }

    setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }

    build(): Car {
        return new Car(this.bodyType, this.engine, this.transmission, this.wheels, this.color);
    }
}
