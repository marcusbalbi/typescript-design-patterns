export interface Observer {
  update(mensagem: string): void;
  getId(): number;
}
