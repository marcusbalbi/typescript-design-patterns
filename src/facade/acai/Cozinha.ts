import { Acai } from "../../decorator/acai/Acai";
import { Cliente } from "./Cliente";

interface Pedido {
  acai: Acai;
  cliente: Cliente;
  mensagem: string;
}

export class Cozinha {
  static pedidos: Pedido[] = [];

  static adicionarPedido(cliente: Cliente, acai: Acai, mensagem = ""): void {
    this.pedidos = this.pedidos.concat({
      acai,
      cliente,
      mensagem,
    });
  }
  static info(): void {
    console.log(`[Cozinha]: Atualmente a fila está com: ${this.pedidos.length} pedidos`);
  }

  static preparar(): void {
    const pedido = this.pedidos.shift();
    if (!pedido) {
      return this.info();
    }
    console.log(`[Cozinha]: Preparando o pedido de ${pedido.cliente.getNome()}`);
    pedido.acai.make();
  }
}
