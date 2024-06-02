import {CoffeeMachine, CoffeeMachineFactory} from "../CoffeeMachine.types";
import {CoffeeMachineNespresso} from "../classes/CoffeeMachineNespresso.class";

export class CoffeeMachineFactoryNespresso implements CoffeeMachineFactory {
  createCoffeeMachine(): CoffeeMachine {
    return new CoffeeMachineNespresso();
  }
}
