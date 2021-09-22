import { OldStorageClass } from "./OldStorageClass";

export class MemoryStorageAdapterClass extends OldStorageClass {
  constructor(protected filename: string) {}
  set(key: string, value: string): void {}

  get(key: string): string | undefined {}
}
