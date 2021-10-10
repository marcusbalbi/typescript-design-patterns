import { inject, injectable } from "tsyringe";
import { StorageContract } from "./StorageContract";

interface userData {
  login: string;
  email: string;
  password: string;
}

@injectable()
export class UserClass {
  constructor(@inject("StorageContract") protected storage: StorageContract) {}

  addUser(username: string, data: userData): void {
    const seriealized = JSON.stringify(data);
    this.storage.set(username, seriealized);
  }

  readUser(username: string): userData | undefined {
    const data = this.storage.get(username);
    if (data) {
      return JSON.parse(data) as userData;
    }
  }
}
