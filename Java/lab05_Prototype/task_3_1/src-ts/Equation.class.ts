import {Prototype} from "./Equation.types";

export abstract class Equation implements Prototype<Equation> {
  abstract clone(): Equation;
  abstract solve(): number | number[];
}
