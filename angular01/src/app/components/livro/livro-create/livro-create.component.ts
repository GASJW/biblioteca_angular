import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
//import { Livro } from '../../../livro';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css'],
})
export class LivroCreateComponent implements OnInit {
  Livro: Livro;

  constructor(private router: Router) {
    this.Livro = new Livro();
  }

  ngOnInit(): void {
    //this.Titulo = this.Titulo;
    //this.Autor = this.Autor;
    //this.numeroDePaginas = this.numeroDePaginas;
  }

  salvar(): void {
    console.log('salvar');
    console.log(JSON.stringify(this.Livro));
  }

  goToIndex(): void {
    this.router.navigate(['/livro-index']);
  }
}
