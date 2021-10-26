import { Dispositivos } from "./Dispositivos";

export class Radio extends Dispositivos {
  update(info: string): void {
    console.log(`\n Estação de Radio : ${info}`);
  }
}
