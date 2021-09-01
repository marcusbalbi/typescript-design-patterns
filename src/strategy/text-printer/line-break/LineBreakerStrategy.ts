export default interface LineBreakerStrategy {
  breakLines(text: string): string;
}
