import { Error } from "../Error";
import { ConcreteErrorHandler } from "./ConcreteErrorHandler";

export class UserNotPermitedHandler extends ConcreteErrorHandler {
  handle(error: Error): string | undefined {
    if (error.code === 101) {
      return `Usuário não possui permissão para realizar operação!`;
    } else if (this.next) {
      return this.next.handle(error);
    }
  }
}
