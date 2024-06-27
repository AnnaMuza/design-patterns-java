import {FileHandler} from "./FileHandler.class";

export class ImageHandler extends FileHandler {
  public handle(file: string): void {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      console.log(`Opening image file: ${file}`);
    } else {
      super.handle(file);
    }
  }
}
