import {EngineBuilder} from "../../../lab04_Builder/task_3_1/src-ts/builders/Engine.builder";
import {Car} from "../../../lab04_Builder/task_3_1/src-ts/classes/Car.class";
import {TransmissionBuilder} from "../../../lab04_Builder/task_3_1/src-ts/builders/Transmission.builder";
import {WheelBuilder} from "../../../lab04_Builder/task_3_1/src-ts/builders/Wheel.builder";
import {CarBuilder} from "../../../lab04_Builder/task_3_1/src-ts/builders/Car.builder";

export class Director {
    private static instance: Director;

    static getInstance(): Director {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    public buildSportsCar(): Car {
        const engine = new EngineBuilder()
            .setPower(400)
            .setVolume(3.5)
            .setTorque(450)
            .setFuelType('Petrol')
            .build();

        const transmission = new TransmissionBuilder()
            .setType('Automatic')
            .setGears(8)
            .build();

        const wheels = Array(4).fill(new WheelBuilder()
            .setMaterial('Alloy')
            .setDiameter(20)
            .build());

        return new CarBuilder()
            .setBodyType('Coupe')
            .setEngine(engine)
            .setTransmission(transmission)
            .setWheels(wheels)
            .setColor('Red')
            .build();
    }

    public buildFamilyCar(): Car {
        const engine = new EngineBuilder()
            .setPower(150)
            .setVolume(2.0)
            .setTorque(200)
            .setFuelType('Diesel')
            .build();

        const transmission = new TransmissionBuilder()
            .setType('Manual')
            .setGears(6)
            .build();

        const wheels = Array(4).fill(new WheelBuilder()
            .setMaterial('Steel')
            .setDiameter(16)
            .build());

        return new CarBuilder()
            .setBodyType('SUV')
            .setEngine(engine)
            .setTransmission(transmission)
            .setWheels(wheels)
            .setColor('Blue')
            .build();
    }
}
