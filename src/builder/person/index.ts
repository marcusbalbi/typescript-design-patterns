import { PersonBuilder } from "./Person";

// const person = new Person("Marcus", "1989-07-27", new CPF("1564564564"));

const builder = new PersonBuilder();

const person = builder
  .addName("Marcus")
  .addBirthdate("1989-07-27")
  .addCPF("564564564564545")
  .build();

console.log(person);
