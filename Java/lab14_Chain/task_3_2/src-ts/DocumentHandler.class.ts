import {FileHandler} from "./FileHandler.class";

export class DocumentHandler extends FileHandler {
  public handle(file: string): void {
    if (file.endsWith('.docx') || file.endsWith('.doc') || file.endsWith('.pdf')) {
      console.log(`Opening document file: ${file}`);
    } else {
      super.handle(file);
    }
  }
}
