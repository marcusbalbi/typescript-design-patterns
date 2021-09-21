import { AcaiFacade } from "./AcaiFacade";
import { Cliente } from "./Cliente";
import { Cozinha } from "./Cozinha";

const acaiFacade = new AcaiFacade();

const cliente = new Cliente("Marcus Balbi", "balbimarcus@gmail.com");
Cozinha.info();
acaiFacade.realizarPedidoAcai400mlComAmendoin(cliente);
Cozinha.info();
Cozinha.preparar();
