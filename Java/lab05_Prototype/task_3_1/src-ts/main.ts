import {LinearEquation} from "./LinearEquation.class";
import {QuadraticEquation} from "./QuadraticEquation.class";

const linearEquation1 = new LinearEquation(2, 3);
const linearEquation2 = linearEquation1.clone();

console.log(linearEquation1.toString());
console.log(linearEquation2.toString());

const quadraticEquation1 = new QuadraticEquation(1, -3, 2);
const quadraticEquation2 = quadraticEquation1.clone();

console.log(quadraticEquation1.toString());
console.log(quadraticEquation2.toString());

console.log(linearEquation1.solve());
console.log(quadraticEquation1.solve());
