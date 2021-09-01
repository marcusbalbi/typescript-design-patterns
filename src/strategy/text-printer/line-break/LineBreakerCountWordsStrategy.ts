import LineBreakerStrategy from "./LineBreakerStrategy";

export class LineBreakerCountWordsStrategy implements LineBreakerStrategy {
  constructor(private wordCount: number) {}
  breakLines(text: string): string {
    // criar chunks de x palavras
    const words = text.split(" ");
    const chunks = [];
    let chunkIncr = 0;
    let chunk: Array<string> = [];
    for (let i = 0; i <= words.length; i++) {
      if (chunkIncr === this.wordCount || i === words.length) {
        chunkIncr = 0;
        chunks.push([...chunk]);
        chunk = [];
      }
      chunk.push(words[i]);
      chunkIncr++;
    }
    return chunks
      .map((chunk) => {
        return chunk.join(" ").concat("\n\n");
      })
      .join("");
  }
}
