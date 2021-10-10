import { injectable } from "tsyringe";
import { StorageClass } from "./StorageClass";

interface userData {
  login: string;
  email: string;
  password: string;
}

@injectable()
export class UserClass {
  constructor(protected storage: StorageClass) {
    this.storage.setFilename("user.txt");
  }

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
