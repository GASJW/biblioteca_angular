import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css'],
})
export class LivroEditComponent implements OnInit {
  private readonly Id: number;
  Livro: Livro;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService
  ) {
    this.Id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.Livro = new Livro();
  }

  ngOnInit(): void {
    console.log(this.Id);
    this.get(this.Id);
  }

  alterar(): void {
    console.log(`get=>${this.Id}`);
    this.livroService
      .put(this.Id, this.Livro)
      .pipe(take(1))
      .subscribe(() => {
        console.log('Livro alterado');
        alert('Livro alterado com sucesso!');
        this.goToIndex();
      });
  }

  goToIndex(): void {
    this.router.navigate(['/livros/livro-index']);
  }

  get(Id: number): void {
    console.log(`get=>${Id}`);
    this.livroService
      .getId(Id)
      .pipe(take(1))
      .subscribe((livro) => {
        this.Livro = livro;
        console.log(this.Livro.Id);
      });
  }
}
