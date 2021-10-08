import { Error } from "./Error";
import { ErrorNotHandledHandler } from "./handlers/ErrorNotHandledHandler";
import { GenericUserErrorHandler } from "./handlers/GenericUserErrorHandler";
import { UserNotAuthenticatedHandler } from "./handlers/UserNotAuthenticatedHandler";
import { UserNotPermitedHandler } from "./handlers/UserNotPermitedHandler";

export class ErrorHandler {
  constructor(protected error: Error) {}
  public handle(): string | undefined {
    // construir cadeia e chamar
    const notauth = new UserNotAuthenticatedHandler();
    const withoutPermission = new UserNotPermitedHandler();
    const genericUserHandler = new GenericUserErrorHandler();
    const notHandled = new ErrorNotHandledHandler();

    notauth.setNext(withoutPermission);
    withoutPermission.setNext(genericUserHandler);
    genericUserHandler.setNext(notHandled);
    return notauth.handle(this.error);
  }
}
