import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { LivroMensagens } from '../livro-mensagens';
//import { Livro } from '../../../livro';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css'],
})
export class LivroCreateComponent implements OnInit {
  Livro: Livro;

  constructor(
    private router: Router,
    private livroService: LivroService,
    private mensagemService: MensagemService
  ) {
    this.Livro = new Livro();
  }

  ngOnInit(): void {
    //this.Titulo = this.Titulo;
    //this.Autor = this.Autor;
    //this.numeroDePaginas = this.numeroDePaginas;
  }

  save(): void {
    this.livroService
      .post(this.Livro)
      .pipe(take(1))
      .subscribe({
        next: (livro) => {
          this.handleResponseOK(livro);
        },
        error: (error) => this.handleRespondeError(error),
      });
  }

  handleResponseOK(livro: Livro): void {
    this.Livro = livro;
    this.showMessageOk();
    this.goToIndex();
  }

  handleRespondeError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.mensagemService.set(error.message);
    } else if (error.status === 500) {
      this.mensagemService.set(
        LivroMensagens.CreateErrorInternalServerErrorPtBr
      );
    } else if (error.status === 400) {
      this.mensagemService.set(LivroMensagens.CreateErrorBadRequestPtBr);
    } else {
      throw -1;
    }
  }

  showMessageOk(): void {
    this.mensagemService.set(LivroMensagens.CreateOKPtBr);
  }

  goToIndex(): void {
    this.router.navigate(['/livros/livro-index']);
  }
}
