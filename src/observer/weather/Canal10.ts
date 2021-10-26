import { Dispositivos } from "./Dispositivos";

export class Canal10 extends Dispositivos {
  update(mensagem: string): void {
    console.log(`INFORMAÇÔES URGENTES DO CANAL 10: ${mensagem}`);
  }
}
