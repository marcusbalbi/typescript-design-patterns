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
    // const email = EmailSender(cliente.getEmail());
    // email.send("Pedido de Acai", `Seu Pedido: ${acai.toString()}`);
    console.log(`Enviando email para: ${cliente.getEmail()}`);
  }
}
