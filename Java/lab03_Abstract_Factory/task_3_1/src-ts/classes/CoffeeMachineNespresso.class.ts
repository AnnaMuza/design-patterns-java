import {CoffeeMachine} from "../CoffeeMachine.types";

export class CoffeeMachineNespresso implements CoffeeMachine {
  get costPerCup(): number {
    return 0.6;
  }

  get machineCost(): number {
    return 1200;
  }

  get maintenanceCost(): number {
    return 120;
  }
}
