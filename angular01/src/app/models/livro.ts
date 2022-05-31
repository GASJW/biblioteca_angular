export class Livro {
  Id!: number;
  Titulo: string;
  Autor: string;
  NumeroDePaginas: number;

  constructor() {
    this.Titulo = '';
    this.Autor = '';
    this.NumeroDePaginas = 0;
  }
}
