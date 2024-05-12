import {Equation} from "./Equation.class";

export class QuadraticEquation extends Equation {
  solve(): number[] {
    const [a, b, c] = this.coefficients;
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
    } else if (discriminant === 0) {
      return [-b / (2 * a)];
    } else {
      return [];
    }
  }
}