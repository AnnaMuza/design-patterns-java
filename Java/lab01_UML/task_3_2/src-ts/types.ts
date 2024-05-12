export interface Product {
  doSomething(): void;
}

export interface Creator {
  someOperation(): void;
  createProduct(): Product;
}