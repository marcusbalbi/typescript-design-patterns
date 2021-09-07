export class CPF {
  constructor(private cpfNumber: string) {
    if (!this.isValid()) {
      throw new Error("CPF Inválido!");
    }
  }

  public getNumber(): string {
    return this.cpfNumber;
  }

  protected isValid(): boolean {
    console.log("Validando CPF " + this.cpfNumber);
    return true;
  }
}

export class Person {
  constructor(
    private name: string,
    private birthdate: string,
    private cpf: CPF,
  ) {}

  getCpf(): CPF {
    return this.cpf;
  }

  isSamePerson(p: Person): boolean {
    return p.cpf.getNumber() === this.cpf.getNumber();
  }
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
