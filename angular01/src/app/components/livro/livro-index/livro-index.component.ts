import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';

@Component({
  selector: 'app-livro-index',
  templateUrl: './livro-index.component.html',
  styleUrls: ['./livro-index.component.css'],
})
export class LivroIndexComponent implements OnInit {
  Livros: Livro[];
  Livro: Livro;

  constructor(private router: Router, private livroService: LivroService) {
    this.Livros = new Array<Livro>();
    this.Livro = new Livro();
  }

  ngOnInit(): void {}

  pesquisar(): void {
    const Id = document.getElementById('txtId') as HTMLInputElement;
    if (Id.value == '') {
      console.log('Busca por todos');
      this.pesquisarTodos();
    } else {
      console.log('Busca por Id');
      this.pesquisarId(Number(Id.value));
    }
  }

  pesquisarTodos(): void {
    //console.log('Inicializou');
    this.livroService
      .get()
      .pipe(take(1))
      .subscribe((livros) => {
        this.Livros = livros;
        //console.log(JSON.stringify(this.Livros));
        //console.log('Recebeu');
      });
    //console.log('Finalizou');
  }

  pesquisarId(Id: number): void {
    this.livroService
      .getId(Id)
      .pipe(take(1))
      .subscribe((livro) => {
        this.Livro = livro;
      });
  }

  goToNovo(): void {
    this.router.navigate(['/livros/livro-create']);
  }
}
