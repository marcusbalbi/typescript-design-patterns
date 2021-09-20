import { Acai400ml } from "../../decorator/acai/Acai400ml";
import { ComAmendoin } from "../../decorator/acai/ComAmendoin";
import { Cliente } from "./Cliente";
import { Cozinha } from "./Cozinha";

export class AcaiFacade {
  realizarPedidoAcai400mlComAmendoin(cliente: Cliente, mensagem = ""): void {
    // preparar ACAI
    const acai = new ComAmendoin(new Acai400ml());

    // enviar para "Cozinha"
    Cozinha.adicionarPedido(cliente, acai, mensagem);

    // enviar pedido para o cliente
    console.log(`Enviando email para: ${cliente.getEmail()}`);
  }
}
