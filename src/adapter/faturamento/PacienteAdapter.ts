import { Cliente } from "./Cliente";
import { PacienteInterface } from "./Paciente";

export class PacienteAdapter implements PacienteInterface {
  constructor(protected cliente: Cliente) {}

  obterNome(): string {
    const [nome] = this.cliente.obterNomeCompleto().split(" ");
    return nome;
  }
  obterSobrenome(): string {
    const [_, sobrenome] = this.cliente.obterNomeCompleto().split(" ");
    return sobrenome;
  }
  obterDocumento(): string {
    return this.cliente.obterCpf();
  }

  
}
