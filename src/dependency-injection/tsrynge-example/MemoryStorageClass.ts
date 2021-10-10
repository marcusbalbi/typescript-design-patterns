import { StorageContract } from "./StorageContract";

export class MemoryStorageClass implements StorageContract {
  protected data: { [key: string]: string } = {};
  set(key: string, value: string): void {
    this.data[key] = value;
  }

  get(key: string): string | undefined {
    return this.data[key];
  }
}
