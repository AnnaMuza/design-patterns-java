import {Wheel} from "../classes/Wheel.class";

export class WheelBuilder {
    private material: 'Steel' | 'Alloy' = 'Steel';
    private diameter: number = 15;

    setMaterial(material: 'Steel' | 'Alloy'): WheelBuilder {
        this.material = material;
        return this;
    }

    setDiameter(diameter: number): WheelBuilder {
        this.diameter = diameter;
        return this;
    }

    build(): Wheel {
        return new Wheel(this.material, this.diameter);
    }
}
