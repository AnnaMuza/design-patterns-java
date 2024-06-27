import {FileHandler} from "./FileHandler.class";

export class PresentationHandler extends FileHandler {
  public handle(file: string): void {
    if (file.endsWith('.pptx')) {
      console.log(`Opening presentation file: ${file}`);
    } else {
      super.handle(file);
    }
  }
}
