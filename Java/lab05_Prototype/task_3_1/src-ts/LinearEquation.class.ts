import {Equation} from "./Equation.class";

export class LinearEquation extends Equation {
  constructor(private a: number, private b: number) {
    super();
  }

  clone(): LinearEquation {
    return new LinearEquation(this.a, this.b);
  }

  solve(): number {
    if (this.a === 0) {
      throw new Error("a cannot be zero for a linear equation");
    }
    return -this.b / this.a;
  }

  toString(): string {
    return `${this.a}x + ${this.b} = 0`;
  }
}
