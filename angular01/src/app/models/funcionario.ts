export class Funcionario {
  Id!: number;
  Nome: string;
  Sobrenome: string;
  Cargo: string;
  Idade: number;

  constructor() {
    this.Nome = '';
    this.Sobrenome = '';
    this.Cargo = '';
    this.Idade = 0;
  }
}
