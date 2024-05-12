export abstract class CoffeeDrink {
  protected name: string;
  protected cost: number;
  protected price: number;

  protected constructor(name: string, cost: number, price: number) {
    this.name = name;
    this.cost = cost;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getCost(): number {
    return this.cost;
  }

  getPrice(): number {
    return this.price;
  }

  getProfit(): number {
    return this.price - this.cost;
  }
}