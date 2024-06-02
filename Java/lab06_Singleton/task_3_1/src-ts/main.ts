import {TextFileProcessor} from "./TextFileProcessor.class";

(async () => {
  const processor = TextFileProcessor.getInstance();
  await processor.loadFile('./textfile.txt');
  processor.processFile();

  const content = processor.getContent();
  console.log('File content:', content);
})();
