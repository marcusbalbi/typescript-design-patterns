import { OldStorageClass } from "./OldStorageClass";

interface userData {
  login: string;
  email: string;
  password: string;
}

export class UserClass {
  constructor(protected storage: OldStorageClass) {}

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
