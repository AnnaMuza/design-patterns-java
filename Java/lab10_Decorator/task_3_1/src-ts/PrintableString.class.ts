export class PrintableString {
  private base: string;

  constructor(base: string) {
    this.base = base;
  }

  print() {
    console.log(this.base);
  }

  getBase(): string {
    return this.base;
  }

  setBase(newBase: string) {
    this.base = newBase;
  }
}
