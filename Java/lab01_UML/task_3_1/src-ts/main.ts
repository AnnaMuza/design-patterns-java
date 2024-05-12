import {CarBuilder} from "./CarBuilder.class";
import {Wheel} from "./Wheel.class";
import {Engine} from "./Engine.class ";
import {CarSimulator} from "./CarSimulator.class";

const builder = new CarBuilder();
builder.addWheel(new Wheel(17, "summer"));
builder.addWheel(new Wheel(17, "summer"));
builder.addWheel(new Wheel(17, "summer"));
builder.addWheel(new Wheel(17, "summer"));
builder.setEngine(new Engine("V6", 250));

const car = builder.build();
const simulator = new CarSimulator(builder);
