import {Equation} from "./Equation.class";
import * as fs from "node:fs";
import {QuadraticEquation} from "./QuadraticEquation.class";
import {BiQuadraticEquation} from "./BiQuadraticEquatio.class";
import * as path from "node:path";

class SolverService {
  public analyzeEquations(equations: Equation[]) {
    const results: Record<string, Equation[]> = {
      noSolutions: [],
      oneSolution: [],
      twoSolutions: [],
      threeSolutions: [],
      fourSolutions: [],
      infiniteSolutions: [],
    };

    let minSolution = Infinity;
    let maxSolution = -Infinity;

    for (const equation of equations) {
      const solutions = equation.solve();
      const numSolutions = solutions.length;

      if (numSolutions === 0) {
        results.noSolutions.push(equation);
      } else if (numSolutions === 1) {
        results.oneSolution.push(equation);
        minSolution = Math.min(minSolution, solutions[0]);
        maxSolution = Math.max(maxSolution, solutions[0]);
      } else if (numSolutions === 2) {
        results.twoSolutions.push(equation);
      } else if (numSolutions === 3) {
        results.threeSolutions.push(equation);
      } else if (numSolutions === 4) {
        results.fourSolutions.push(equation);
      } else {
        results.infiniteSolutions.push(equation);
      }
    }

    return { ...results, minSolution, maxSolution };
  }

  public readEquationsFromFile(filename: string): Equation[] {
    const fileContent = fs.readFileSync(path.resolve(__dirname, '..', filename), 'utf-8');
    const lines = fileContent.split('\n');
    const equations: Equation[] = [];

    for (const line of lines) {
      if (!/\S+/.test(line)) continue;
      const coefficients = line.trim().split(/\s+/).map(Number);
      const degree = coefficients.length - 1;

      if (degree === 1) {
        equations.push(new Equation(coefficients));
      } else if (degree === 2) {
        equations.push(new QuadraticEquation(coefficients));
      } else if (degree === 4) {
        equations.push(new BiQuadraticEquation(coefficients));
      } else {
        console.warn(`Рівняння непідтримуваного степеня (${degree}) проігноровано.`);
      }
    }

    return equations;
  }
}

export default new SolverService();