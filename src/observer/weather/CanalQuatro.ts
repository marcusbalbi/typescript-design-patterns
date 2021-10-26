import { Dispositivos } from "./Dispositivos";

export class CanalQuatro extends Dispositivos {
  update(mensagem: string): void {
    console.log(`\n Informações do Canal Quatro sobre o Tempo  : ${mensagem}`);
  }
}
