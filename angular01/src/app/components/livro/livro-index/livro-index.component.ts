import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { LivroMensagens } from '../livro-mensagens';

@Component({
  selector: 'app-livro-index',
  templateUrl: './livro-index.component.html',
  styleUrls: ['./livro-index.component.css'],
})
export class LivroIndexComponent implements OnInit {
  SearchId: string;
  Livros: Livro[];

  constructor(
    private router: Router,
    private livroService: LivroService,
    private mensagemService: MensagemService
  ) {
    this.Livros = new Array<Livro>();
    this.SearchId = '';
  }

  ngOnInit(): void {}

  search(): void {
    if (this.SearchId === '') {
      this.get();
      return;
    }
    this.getId(Number(this.SearchId));
  }

  get(): void {
    this.livroService
      .get()
      .pipe(take(1))
      .subscribe({
        next: (livros) => {
          this.getLivros(livros);
        },
        error: (error) => {
          this.handleRespondeError(error);
        },
      });
  }

  getId(Id: number): void {
    this.livroService
      .getId(Id)
      .pipe(take(1))
      .subscribe({
        next: (livro) => {
          this.Livros = [];
          this.Livros.push(livro);
        },
        error: (error) => {
          this.handleRespondeErrorGetId(error);
        },
      });
  }

  getLivros(livros: Array<Livro>): void {
    this.Livros = livros;
  }

  confirmDelete(id: number): void {
    if (confirm(`Deseja excluir o livro ${id}?`)) {
      this.delete(id);
    }
  }

  delete(Id: number): void {
    this.livroService
      .delete(Id)
      .pipe(take(1))
      .subscribe({
        error: (error) => {
          this.handleRespondeError(error);
          this.clearInput();
          this.search();
        },
        complete: () => {
          this.handleComplete();
        },
      });
  }

  handleComplete(): void {
    this.mensagemService.set(LivroMensagens.DeleteOkPtBr);
    this.clearInput();
    this.search();
  }

  clearInput(): void {
    this.SearchId = '';
  }

  goToCreate(): void {
    this.router.navigate(['/livros/livro-create-reactive']);
  }

  handleRespondeErrorGetId(error: HttpErrorResponse): void {
    if (error.status === 404) {
      this.mensagemService.set(LivroMensagens.GetIdErrorNotFoundPtBr);
    }
  }

  handleRespondeError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.mensagemService.set(error.message);
    } else if (error.status === 404) {
      this.mensagemService.set(LivroMensagens.GetIdErrorNotFoundPtBr);
    } else if (error.status === 400) {
      this.mensagemService.set(LivroMensagens.EditErrorBadRequestPtBt);
    } else {
      throw -1;
    }
  }
}
