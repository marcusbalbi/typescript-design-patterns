import { Dispositivos } from "./Dispositivos";

export class WeatherApp extends Dispositivos {
  update(mensagem: string): void {
    console.log(`\n App de Previsão do Tempo : ${mensagem}`);
  }
}
