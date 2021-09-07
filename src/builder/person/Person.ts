export class CPF {
  constructor(private cpfNumber: string) {
    this.validateCPF();
  }

  validateCPF() {
    console.log("Validando CPF " + this.cpfNumber);
    return false;
  }
}

export class Person {
  constructor(
    private name: string,
    private birthdate: string,
    private cpf: CPF,
  ) {}
}

export class PersonBuilder {
  private name = "";
  private birth = "";
  private cpf = "";

  addName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }
  addBirthdate(birth: string): PersonBuilder {
    this.birth = birth;
    return this;
  }
  addCPF(cpf: string): PersonBuilder {
    this.cpf = cpf;
    return this;
  }

  build(): Person {
    return new Person(this.name, this.birth, new CPF(this.cpf));
  }
}
