import { Cliente } from "./Cliente";
import { Paciente, PacienteInterface } from "./Paciente";
import { PacienteAdapter } from "./PacienteAdapter";

function exibirPaciente(paciente: PacienteInterface): void {
  console.log(paciente.obterNome());
  console.log(paciente.obterSobrenome());
  console.log(paciente.obterDocumento());
}

const cliente = new Cliente("Marcus Balbi", "12345678945");
const pacienteCliente = new PacienteAdapter(cliente);
exibirPaciente(pacienteCliente);

const paciente = new Paciente({
  nome: "Joao",
  sobrenome: "Augusto",
  documento: "99999985445",
});
exibirPaciente(paciente);
