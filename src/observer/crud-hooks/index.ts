import { HOOK_TYPES, UserDto, UserRepository } from "./UserRepository";

const user = new UserRepository();

const logCreated = (user: UserDto) => {
  console.log("User Created", user);
};
const sendEmail = (user: UserDto) => {
  console.log("Email sent::::User saved", user);
};

user.addHook(HOOK_TYPES.created, logCreated);
user.addHook(HOOK_TYPES.created, sendEmail);
user.addHook(HOOK_TYPES.updated, sendEmail);

const id = user.create({ name: "Jhon", age: 12 });

user.update(id, { name: "Jhonny", age: 14 });
