import { HttpErrorResponse } from '@angular/common/http';
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
  SearchId: string;
  Livros: Livro[];

  constructor(private router: Router, private livroService: LivroService) {
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
          this.Livros = livros;
        },
        error: (error) => {
          this.manageResponse(error);
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
          this.manageResponse(error);
        },
      });
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
          this.manageResponse(error);
        },
        complete: () => {
          this.onComplete();
        },
      });
  }

  onComplete(): void {
    alert('Livro removido com sucesso!');
    this.SearchId = '';
    this.search();
  }

  goToCreate(): void {
    this.router.navigate(['/livros/livro-create']);
  }

  manageError(error: number): string {
    let descriptionError = '';
    switch (error) {
      case 1040:
        descriptionError = 'NÃO ENCONTRADO';
        break;
      case 1004:
        descriptionError = 'NÃO EXISTEM DADOS PARA EXIBIR';
        break;
      case 5000:
        descriptionError = 'ERRO INTERNO NO SERVIDOR';
        break;
      case 4000:
        descriptionError = 'REQUISIÇÃO DE ENTRADA INVÁLIDA';
        break;
      case -1:
        descriptionError = 'ERRO DESCONHECIDO';
        break;
      default:
        descriptionError = `ERRO DESCONHECIDO: ${error}`;
        break;
    }
    return descriptionError;
  }

  manageResponse(response: HttpErrorResponse): void {
    if (response.status === 200) {
      this.manageError(response.status);
      this.search();
    } else if (response.status === 404) {
      this.manageError(1040);
    } else if (response.status === 500) {
      this.manageError(5000);
    } else if (response.status === 400) {
      this.manageError(4000);
    } else {
      throw -1;
    }
  }
}
