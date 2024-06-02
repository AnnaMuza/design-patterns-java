import {Director} from "./Director.class";

const director = Director.getInstance()

const sportsCar = director.buildSportsCar();
console.log(sportsCar);

const familyCar = director.buildFamilyCar();
console.log(familyCar);
