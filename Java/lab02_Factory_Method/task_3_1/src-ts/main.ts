import {CoffeeDrinkFactory} from "./CoffeeDrink.factory";

const factory = new CoffeeDrinkFactory();
const drinksSold = {
  "Еспресо": 50,
  "Американо": 80,
  "Капучіно": 120,
  "Латте": 95,
  "Мока": 30,
  "Флет Вайт": 45,
};

let totalProfit = 0;
for (const [drinkType, quantity] of Object.entries(drinksSold)) {
  const drink = factory.createDrink(drinkType);
  if (drink) {
    totalProfit += drink.getProfit() * quantity;
  }
}

console.log(`Загальний прибуток кав'ярні: ${totalProfit} грн`);