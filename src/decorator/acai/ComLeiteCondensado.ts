import { AcaiDecorator } from "./AcaiDecorator";

export class ComLeiteCondensado extends AcaiDecorator {
  make(): void {
    console.log("Adiciona Leite Condensado!");
    this.acai.make();
  }
}
