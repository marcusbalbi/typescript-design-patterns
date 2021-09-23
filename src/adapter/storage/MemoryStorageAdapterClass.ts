import { OldStorageClass } from "./OldStorageClass";

export class MemoryStorageAdapterClass extends OldStorageClass {
  protected data: { [key: string]: string } = {};
  constructor() {
    super("");
  }
  set(key: string, value: string): void {
    this.data[key] = value;
  }

  get(key: string): string | undefined {
    return this.data[key];
  }
}
