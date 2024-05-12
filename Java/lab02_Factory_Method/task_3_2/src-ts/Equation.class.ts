export class Equation {
  coefficients: number[];

  constructor(coefficients: number[]) {
    this.coefficients = coefficients;
  }

  solve(): number[] {
    const [b, c] = this.coefficients;
    if (b === 0) {
      return c === 0 ? [Infinity] : [];
    } else {
      return [-c / b];
    }
  }
}