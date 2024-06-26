import {PrintableString} from "./PrintableString.class";
import {
  PostComaDecorator,
  PostExclaimDecorator,
  PostSpaceDecorator,
  PostWordDecorator,
  PreWordDecorator
} from "./decorators";

let printableString = new PrintableString('');

PreWordDecorator('Hello')(printableString);
PostComaDecorator(printableString);
PostSpaceDecorator(printableString);
PostWordDecorator('World')(printableString);
PostExclaimDecorator(printableString);

printableString.print();
