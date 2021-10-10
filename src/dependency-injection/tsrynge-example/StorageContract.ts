export interface StorageContract {
  set(key: string, value: string): void;
  get(key: string): string | undefined;
}
