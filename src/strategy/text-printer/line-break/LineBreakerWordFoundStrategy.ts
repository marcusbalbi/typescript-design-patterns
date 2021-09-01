import LineBreakerStrategy from "./LineBreakerStrategy";

export class LineBreakerWordFoundStrategy implements LineBreakerStrategy {
  constructor(private searchWord: string) {}
  breakLines(text: string): string {
    return text.replace(new RegExp(this.searchWord, 'g'), `${this.searchWord}\n\n`);
  }
}
