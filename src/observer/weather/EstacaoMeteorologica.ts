import { Observer } from "./Interfaces/Observer";
import { Subject } from "./Interfaces/Subject";

export class EstacaoMeteorologica implements Subject {
  protected observers: Array<Observer> = [];

  protected info = "";

  addObserver(observer: Observer): number {
    this.observers.push(observer);
    return Math.floor(Math.random() * 1000);
  }

  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this.info);
    });
  }

  removeObserver(id: number): void {
    this.observers = this.observers.filter(
      (observer) => observer.getId() !== id,
    );
  }

  setInfo(info: string): void {
    this.info = info;
    this.notify();
  }

  getInfo(): string {
    return this.info;
  }
}
