export class Cliente {
  constructor(protected nome: string, protected email: string) {}

  getEmail(): string {
    return this.email;
  }

  getNome(): string {
    return this.nome;
  }
}
