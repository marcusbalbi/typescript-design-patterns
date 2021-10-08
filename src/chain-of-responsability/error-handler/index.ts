import { Error } from "./Error";
import { ErrorHandler } from "./ErrorHandler";

const error = new Error(250, "Falha qualquer de teste");

console.log(new ErrorHandler(error).handle());
