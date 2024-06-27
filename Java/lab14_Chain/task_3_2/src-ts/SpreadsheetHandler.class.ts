import {FileHandler} from "./FileHandler.class";

export class SpreadsheetHandler extends FileHandler {
  public handle(file: string): void {
    if (file.endsWith('.xls') || file.endsWith('.xlsx')) {
      console.log(`Opening spreadsheet file: ${file}`);
    } else {
      super.handle(file);
    }
  }
}
