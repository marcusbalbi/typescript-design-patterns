import { Error } from "../Error";
import { ConcreteErrorHandler } from "./ConcreteErrorHandler";

export class ErrorNotHandledHandler extends ConcreteErrorHandler {
  handle(_: Error): string {
    return "Não foi possivel tratar o erro informado";
  }
}
