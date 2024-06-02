import {Equation} from "./Equation.class";

export class QuadraticEquation extends Equation {
  constructor(private a: number, private b: number, private c: number) {
    super();
  }

  clone(): QuadraticEquation {
    return new QuadraticEquation(this.a, this.b, this.c);
  }

  solve(): number[] {
    const discriminant = this.b * this.b - 4 * this.a * this.c;
    if (discriminant < 0) {
      throw new Error("No real roots");
    } else if (discriminant === 0) {
      return [-this.b / (2 * this.a)];
    } else {
      const root1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
      const root2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
      return [root1, root2];
    }
  }

  toString(): string {
    return `${this.a}x^2 + ${this.b}x + ${this.c} = 0`;
  }
}
