export class StringBuilder {
  private value: string;

  constructor() {
    this.value = '';
  }

  append(text: string): StringBuilder {
    this.value += text;
    return this;
  }

  insert(position: number, text: string): StringBuilder {
    if (position < 0 || position > this.value.length) {
      throw new Error("Position out of range");
    }
    this.value = this.value.slice(0, position) + text + this.value.slice(position);
    return this;
  }

  build(): string {
    return this.value;
  }
}
