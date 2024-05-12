import {Product2} from "./Product2.class";
import {Creator, Product} from "./types";

export class ConcreteCreator2 implements Creator {
  someOperation(): void {
    const product = this.createProduct();
    product.doSomething();
  }

  createProduct(): Product {
    return new Product2();
  }
}