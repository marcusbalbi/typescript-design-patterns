import { Observer } from "./Observer";

export interface Subject {
  addObserver(observer: Observer): number;
  removeObserver(id: number): void;

  getInfo(): string;

  notify(): void;
}
