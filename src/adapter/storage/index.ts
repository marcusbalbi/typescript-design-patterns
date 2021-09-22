import { OldStorageClass } from "./OldStorageClass";
import { UserClass } from "./UserClass";

const oldStorage = new OldStorageClass("user_storage.txt");

const user = new UserClass(oldStorage);

user.addUser("marcusbalbi", {
  email: "balbimarcus@gmail.com",
  login: "marcusbalbi",
  password: "abc123",
});

console.log(user.readUser("marcusbalbi"));
