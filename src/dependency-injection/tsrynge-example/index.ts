import "reflect-metadata";
import { container } from "tsyringe";
import { MemoryStorageClass } from "./MemoryStorageClass";
import { StorageClass } from "./StorageClass";
import { UserClass } from "./UserClass";

//---------------------------------------------------
// Container configuration (could be another file)
// container.register("StorageContract", {
//   useValue: new StorageClass("user.txt"),
// });

container.register("StorageContract", MemoryStorageClass);

//---------------------------------------------------
const user = container.resolve(UserClass);

user.addUser("marcusbalbi", {
  email: "balbimarcus@gmail.com",
  login: "marcusbalbi",
  password: "abc123",
});

console.log(user.readUser("marcusbalbi"));
