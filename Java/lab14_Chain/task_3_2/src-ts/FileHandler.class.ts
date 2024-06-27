export abstract class FileHandler {
  protected nextHandler: FileHandler | null = null;

  public setNextHandler(handler: FileHandler): void {
    this.nextHandler = handler;
  }

  public handle(file: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(file);
    } else {
      console.log(`No handler found for ${file}`);
    }
  }
}
