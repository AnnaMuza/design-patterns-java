import {CoffeeMachine, CoffeeMachineFactory} from "../CoffeeMachine.types";
import {CoffeeMachineKeurig} from "../classes/CoffeeMachineKeurig.class";

export class CoffeeMachineFactoryKeurig implements CoffeeMachineFactory {
  createCoffeeMachine(): CoffeeMachine {
    return new CoffeeMachineKeurig();
  }
}
