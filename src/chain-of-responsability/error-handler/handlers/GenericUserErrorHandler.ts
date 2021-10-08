import { Error } from "../Error";
import { ConcreteErrorHandler } from "./ConcreteErrorHandler";

export class GenericUserErrorHandler extends ConcreteErrorHandler {
  handle(error: Error): string | undefined {
    if (error.code >= 100 && error.code < 200) {
      return `Erro de Usuário desconhecido!`;
    } else if (this.next) {
      return this.next.handle(error);
    }
  }
}
