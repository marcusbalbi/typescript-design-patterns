interface PacienteData {
  nome: string;
  sobrenome: string;
  documento: string;
}

export interface PacienteInterface {
  obterNome(): string;
  obterSobrenome(): string;
  obterDocumento(): string;
}

export class Paciente implements PacienteInterface {
  private nome: string;
  private sobrenome: string;
  private documento: string;
  constructor(data: PacienteData) {
    this.nome = data.nome;
    this.sobrenome = data.sobrenome;
    this.documento = data.documento;
  }

  obterNome(): string {
    return this.nome;
  }

  obterSobrenome(): string {
    return this.sobrenome;
  }

  obterDocumento(): string {
    return this.documento;
  }
}
