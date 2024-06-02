import {CoffeeMachine, CoffeeMachineFactory} from "../CoffeeMachine.types";
import {CoffeeMachineDeLonghi} from "../classes/CoffeeMachineDeLonghi.class";

export class CoffeeMachineFactoryDeLonghi implements CoffeeMachineFactory {
  createCoffeeMachine(): CoffeeMachine {
    return new CoffeeMachineDeLonghi();
  }
}
