import { Acai } from "./Acai";

export abstract class AcaiDecorator implements Acai {
  protected acai: Acai;
  constructor(acai: Acai) {
    this.acai = acai;
  }
  abstract make(): void;
}
