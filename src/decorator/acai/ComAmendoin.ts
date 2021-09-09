import { AcaiDecorator } from "./AcaiDecorator";

export class ComAmendoin extends AcaiDecorator {
  make(): void {
    console.log("Adiciona Amendoin !");
    this.acai.make();
  }
}
