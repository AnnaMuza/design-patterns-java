export class TextFileProcessor {
  private static instance: TextFileProcessor;
  private content: string;

  private constructor() {
    this.content = '';
  }

  public static getInstance(): TextFileProcessor {
    if (!TextFileProcessor.instance) {
      TextFileProcessor.instance = new TextFileProcessor();
    }
    return TextFileProcessor.instance;
  }

  public async loadFile(filePath: string): Promise<void> {
    try {
      const response = await fetch(filePath);
      this.content = await response.text();
    } catch (error) {
      console.error('Error loading file:', error);
    }
  }

  public processFile(): void {
    console.log('Processing file content...');
    console.log(this.content);
  }

  public getContent(): string {
    return this.content;
  }
}
