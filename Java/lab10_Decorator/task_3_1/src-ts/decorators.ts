import {PrintableString} from "./PrintableString.class";

// Decorator for adding a comma at the end of the string
export function PostComaDecorator(printableString: PrintableString) {
  const base = printableString.getBase();
  printableString.setBase(base + ',');
}

// Decorator for adding a newline at the end of the string
export function PostEndlDecorator(printableString: PrintableString) {
  const base = printableString.getBase();
  printableString.setBase(base + '\n');
}

// Decorator for adding a space at the end of the string
export function PostSpaceDecorator(printableString: PrintableString) {
  const base = printableString.getBase();
  printableString.setBase(base + ' ');
}

// Decorator for adding an exclamation mark at the end of the string
export function PostExclaimDecorator(printableString: PrintableString) {
  const base = printableString.getBase();
  printableString.setBase(base + '!');
}

// Decorator for adding a word at the end of the string
export function PostWordDecorator(word: string) {
  return function(printableString: PrintableString) {
    const base = printableString.getBase();
    printableString.setBase(base + word);
  };
}

// Decorator for adding a word at the beginning of the string
export function PreWordDecorator(word: string) {
  return function(printableString: PrintableString) {
    const base = printableString.getBase();
    printableString.setBase(word + base);
  };
}
