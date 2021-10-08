import { Error } from "../Error";
import { ConcreteErrorHandler } from "./ConcreteErrorHandler";

export class UserNotAuthenticatedHandler extends ConcreteErrorHandler {
  handle(error: Error): string | undefined {
    if (error.code === 100) {
      return `Usuário não Autenticado para realizar operação!`;
    } else if (this.next) {
      return this.next.handle(error);
    }
  }
}
