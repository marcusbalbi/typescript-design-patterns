import { Observer } from "./Interfaces/Observer";
import { Subject } from "./Interfaces/Subject";

export abstract class Dispositivos implements Observer {
  protected idAssinante: number;
  protected subject: Subject;

  abstract update(mensagem: string): void;

  constructor(subject: Subject) {
    this.idAssinante = subject.addObserver(this);
    this.subject = subject;
  }
  getId(): number {
    return this.idAssinante;
  }

  desfazerAssinatura(): void {
    this.subject.removeObserver(this.idAssinante);
  }
}
