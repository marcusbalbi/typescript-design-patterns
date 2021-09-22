export class Cliente {
  constructor(protected nomeCompleto: string, protected cpf: string) {}

  obterNomeCompleto(): string {
    return this.nomeCompleto;
  }

  obterCpf(): string {
    return this.cpf;
  }
}
