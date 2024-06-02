export interface CoffeeMachine {
  costPerCup: number;
  machineCost: number;
  maintenanceCost: number;
}

export interface CoffeeMachineFactory {
  createCoffeeMachine(): CoffeeMachine;
}
