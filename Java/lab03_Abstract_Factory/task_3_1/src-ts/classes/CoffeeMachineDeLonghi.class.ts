import {CoffeeMachine} from "../CoffeeMachine.types";

export class CoffeeMachineDeLonghi implements CoffeeMachine {
  get costPerCup(): number {
    return 0.5;
  }

  get machineCost(): number {
    return 1000;
  }

  get maintenanceCost(): number {
    return 100;
  }
}
