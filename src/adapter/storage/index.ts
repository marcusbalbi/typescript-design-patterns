import { MemoryStorageAdapterClass } from "./MemoryStorageAdapterClass";
import { OldStorageClass } from "./OldStorageClass";
import { UserClass } from "./UserClass";

// const storage = new OldStorageClass("user_storage.txt");

const storage = new MemoryStorageAdapterClass();

const user = new UserClass(storage);

user.addUser("marcusbalbi", {
  email: "balbimarcus@gmail.com",
  login: "marcusbalbi",
  password: "abc123",
});

console.log(user.readUser("marcusbalbi"));
