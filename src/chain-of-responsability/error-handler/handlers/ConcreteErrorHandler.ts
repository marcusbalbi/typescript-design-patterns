import { Error } from "../Error";

export abstract class ConcreteErrorHandler {
  protected next: ConcreteErrorHandler | null = null;
  setNext(next: ConcreteErrorHandler): void {
    this.next = next;
  }
  abstract handle(error: Error): string | undefined;
}
