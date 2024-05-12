import {Cappuccino} from "./drinks/Cappuccino.class";
import {CoffeeDrink} from "./CoffeeDrink.class";
import {Espresso} from "./drinks/Espresso.class";
import {Americano} from "./drinks/Americano.class";
import {Latte} from "./drinks/Latte.class";
import {Mocha} from "./drinks/Mocha.class";
import {FlatWhite} from "./drinks/FlatWhite.class";

export class CoffeeDrinkFactory {
  createDrink(type: string): CoffeeDrink | null {
    switch (type) {
      case "Еспресо":
        return new Espresso();
      case "Американо":
        return new Americano();
      case "Капучіно":
        return new Cappuccino();
      case "Латте":
        return new Latte();
      case "Мока":
        return new Mocha();
      case "Флет Вайт":
        return new FlatWhite();
      default:
        return null;
    }
  }
}