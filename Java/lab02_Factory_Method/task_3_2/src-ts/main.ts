import solverService from "./Solver.service";

const equations = solverService.readEquationsFromFile('input01.txt'); // input02.txt, input03.txt
const analysis = solverService.analyzeEquations(equations);

console.log(analysis);