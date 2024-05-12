import {Creator, Product} from "./types";
import {Product1} from "./Product1.class";

export class ConcreteCreator1 implements Creator {
  someOperation(): void {
    const product = this.createProduct();
    product.doSomething();
  }

  createProduct(): Product {
    return new Product1();
  }
}