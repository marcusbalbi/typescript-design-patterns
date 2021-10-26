import { Canal10 } from "./Canal10";
import { CanalQuatro } from "./CanalQuatro";
import { EstacaoMeteorologica } from "./EstacaoMeteorologica";
import { Radio } from "./Radio";
import { WeatherApp } from "./WeatherApp";

const estacao = new EstacaoMeteorologica();


const canal4 = new CanalQuatro(estacao);
const radio = new Radio(estacao);
const app = new WeatherApp(estacao);

estacao.setInfo("TEMPO CHUVOSO PARA TODO O DIA\n");
console.log("\n\n======================= PASSADO UM DIA=============================\n\n");

canal4.desfazerAssinatura();
radio.desfazerAssinatura();

const canal10 = new Canal10(estacao);

estacao.setInfo(`TEMPO ABERTO DURANTE O DIA E PANCADAS DE CHUVA A NOITE\n`);

