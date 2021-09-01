import LineBreakerStrategy from "./LineBreakerStrategy";

export class LineBreakerTerminalSizeStrategy implements LineBreakerStrategy {
  constructor(private size: 1 | 2 | 4 | 8) {}
  breakLines(text: string): string {
    const words = text.split(" ");
    const lines = [];
    const half = Math.floor(process.stdout.columns / this.size);
    let line = [];
    for (let i = 0; i < words.length; i++) {
      const lineSize = line.reduce((prev, next) => {
        return prev + next.length;
      }, 0);

      if (lineSize >= half) {
        lines.push([...line]);
        line = [];
      }
      line.push(words[i]);
    }

    return lines
      .map((line) => {
        return line.join(" ").concat("\n\n");
      })
      .join("");
  }
}
