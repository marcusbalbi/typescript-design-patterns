import LineBreakerStrategy from "./line-break/LineBreakerStrategy";

export class Printer {
  private lineBreaker: LineBreakerStrategy | null = null;
  constructor(private text: string) {}

  setLineBreaker(lineBreaker: LineBreakerStrategy): void {
    this.lineBreaker = lineBreaker;
  }
  print(): void {
    const formattedText = this.lineBreaker
      ? this.lineBreaker.breakLines(this.text)
      : this.text;
    console.log(formattedText);
  }
}
