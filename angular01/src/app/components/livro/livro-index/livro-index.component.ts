import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private livroService: LivroService) {
    this.Livros = new Array<Livro>();
  }

  ngOnInit(): void {}

  pesquisar(): void {
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

  goToNovo(): void {
    this.router.navigate(['/livros/livro-create']);
  }
}
