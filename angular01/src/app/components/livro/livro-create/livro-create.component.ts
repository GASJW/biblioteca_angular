import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
//import { Livro } from '../../../livro';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css'],
})
export class LivroCreateComponent implements OnInit {
  Livro: Livro;

  constructor(private router: Router, private livroService: LivroService) {
    this.Livro = new Livro();
  }

  ngOnInit(): void {
    //this.Titulo = this.Titulo;
    //this.Autor = this.Autor;
    //this.numeroDePaginas = this.numeroDePaginas;
  }

  salvar(): void {
    //console.log('salvar-begin');

    this.livroService
      .post(this.Livro)
      .pipe(take(1))
      .subscribe((livro) => {
        this.Livro = livro;
        alert('Livro inserido com sucesso.');
        //console.log(JSON.stringify(this.Livro));
        //console.log('salvar-chegou');
      });

    //console.log(JSON.stringify(this.Livro));
    //console.log('salvar-end');
  }

  goToIndex(): void {
    this.router.navigate(['/livros/livro-index']);
  }
}
