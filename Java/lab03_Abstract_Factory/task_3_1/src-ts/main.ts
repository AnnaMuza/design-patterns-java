import {CoffeeMachineFactory} from "./CoffeeMachine.types";
import {CoffeeMachineFactoryDeLonghi} from "./factories/CoffeeMachineDeLonghi.factory";
import {CoffeeMachineFactoryKeurig} from "./factories/CoffeeMachineKeurig.factory";
import {CoffeeMachineFactoryNespresso} from "./factories/CoffeeMachineNespresso.factory";

function calculateProfit(factory: CoffeeMachineFactory, cupsSoldPerDay: number, days: number, pricePerCup: number): number {
  const coffeeMachine = factory.createCoffeeMachine();
  const totalRevenue = cupsSoldPerDay * pricePerCup * days;
  const totalCost = (coffeeMachine.costPerCup * cupsSoldPerDay * days) + coffeeMachine.machineCost + (coffeeMachine.maintenanceCost * (days / 30));
  return totalRevenue - totalCost; // profit
}

const cupsSoldPerDay = 100;
const days = 30;
const pricePerCup = 2;

const factoryDeLonghi = new CoffeeMachineFactoryDeLonghi();
const factoryKeurig = new CoffeeMachineFactoryKeurig();
const factoryNespresso = new CoffeeMachineFactoryNespresso();

console.log("Прибуток з кавовою машиною DeLonghi:", calculateProfit(factoryDeLonghi, cupsSoldPerDay, days, pricePerCup));
console.log("Прибуток з кавовою машиною Keurig:", calculateProfit(factoryKeurig, cupsSoldPerDay, days, pricePerCup));
console.log("Прибуток з кавовою машиною Nespresso:", calculateProfit(factoryNespresso, cupsSoldPerDay, days, pricePerCup));
