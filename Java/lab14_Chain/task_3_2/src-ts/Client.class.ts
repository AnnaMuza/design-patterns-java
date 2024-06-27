import {ImageHandler} from "./ImageHandler.class";
import {DocumentHandler} from "./DocumentHandler.class";
import {SpreadsheetHandler} from "./SpreadsheetHandler.class";
import {PresentationHandler} from "./PresentationHandler.class";

export class Client {
  public static main(): void {
    const files: string[] = [
      'image.jpg',
      'image.png',
      'document.docx',
      'document.doc',
      'table.xls',
      'table.xlsx',
      'presentation.pptx',
      'document.pdf',
    ];

    const imageHandler = new ImageHandler();
    const documentHandler = new DocumentHandler();
    const spreadsheetHandler = new SpreadsheetHandler();
    const presentationHandler = new PresentationHandler();

    imageHandler.setNextHandler(documentHandler);
    documentHandler.setNextHandler(spreadsheetHandler);
    spreadsheetHandler.setNextHandler(presentationHandler);

    for (const file of files) {
      imageHandler.handle(file);
    }
  }
}

Client.main();
