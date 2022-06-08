import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { LivroMensagens } from '../livro-mensagens';

@Component({
  selector: 'app-livro-create-reactive',
  templateUrl: './livro-create-reactive.component.html',
  styleUrls: ['./livro-create-reactive.component.css'],
})
export class LivroCreateReactiveComponent implements OnInit {
  Livro: Livro;
  Formulario: FormGroup;

  constructor(
    private router: Router,
    private livroService: LivroService,
    private mensagemService: MensagemService,
    private formBuilder: FormBuilder
  ) {
    this.Livro = new Livro();

    this.Formulario = this.formBuilder.group({
      titulo: [null, [Validators.required, Validators.maxLength(100)]],
      autor: [null, Validators.maxLength(50)],
      numeroDePaginas: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  createLivro(): Livro {
    let livro: Livro = new Livro();
    livro.Titulo = this.Formulario.controls['titulo'].value;
    livro.Autor = this.Formulario.controls['autor'].value;
    livro.NumeroDePaginas = this.Formulario.controls['numeroDePaginas'].value;

    return livro;
  }

  create(): void {
    /*console.log(this.Formulario.value);
    console.log(this.Formulario.controls['titulo'].value);
    console.log(this.Formulario.controls['autor'].value);
    console.log(this.Formulario.controls['numeroDePaginas'].value);*/
    this.livroService
      .post(this.createLivro())
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.handleResponseOK();
        },
        error: (error) => this.handleResponseError(error),
      });
  }

  handleResponseOK(): void {
    this.showMessageOk();
    this.goToIndex();
  }

  getLivro(livro: Livro): void {
    this.Livro = livro;
  }

  handleResponseError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.mensagemService.set(error.message);
    } else if (error.status === 500) {
      this.mensagemService.set(
        LivroMensagens.CreateErrorInternalServerErrorPtBr
      );
    } else if (error.status === 400) {
      this.mensagemService.set(LivroMensagens.CreateErrorBadRequestPtBr);
    }
  }

  showMessageOk(): void {
    this.mensagemService.set(LivroMensagens.CreateOKPtBr);
  }

  goToIndex(): void {
    this.router.navigate(['/livros/livro-index']);
  }
}
