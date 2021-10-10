import "reflect-metadata";
import { container } from "tsyringe";
import { UserClass } from "./UserClass";


const user = container.resolve(UserClass);

user.addUser("marcusbalbi", {
  email: "balbimarcus@gmail.com",
  login: "marcusbalbi",
  password: "abc123",
});

console.log(user.readUser("marcusbalbi"));
