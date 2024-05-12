import {Product} from "./types";

export class Product2 implements Product {
  doSomething(): void {
    console.log("Product2 doing its thing.");
  }
}