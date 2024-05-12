import {Equation} from "./Equation.class";
import {QuadraticEquation} from "./QuadraticEquation.class";

export class BiQuadraticEquation extends Equation {
  solve(): number[] {
    const [a, _, b, __, c] = this.coefficients;
    const quadratic = new QuadraticEquation([a, b, c]);
    const quadraticSolutions = quadratic.solve();
    const solutions: number[] = [];

    for (const solution of quadraticSolutions) {
      if (solution >= 0) {
        solutions.push(Math.sqrt(solution), -Math.sqrt(solution));
      }
    }

    return solutions;
  }
}