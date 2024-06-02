import {CoffeeMachine} from "../CoffeeMachine.types";

export class CoffeeMachineKeurig implements CoffeeMachine {
  get costPerCup(): number {
    return 0.4;
  }

  get machineCost(): number {
    return 900;
  }

  get maintenanceCost(): number {
    return 90;
  }
}
