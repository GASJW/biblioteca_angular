import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro/livro.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { LivroMensagens } from '../livro-mensagens';

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
    private livroService: LivroService,
    private mensagemService: MensagemService
  ) {
    this.Id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.Livro = new Livro();
  }

  ngOnInit(): void {
    console.log(this.Id);
    this.get(this.Id);
  }

  update(): void {
    this.livroService
      .put(this.Id, this.Livro)
      .pipe(take(1))
      .subscribe({
        next: (livro) => this.handleResponseUpdate(livro),
        error: (error) => this.handleRespondeError(error),
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
      .subscribe({
        next: (livro) => {
          this.handleResponseGet(livro);
        },
        error: (error) => this.handleRespondeError(error),
      });
  }

  handleResponseGet(livro: Livro): void {
    this.Livro = livro;
  }

  handleResponseUpdate(livro: Livro): void {
    this.handleResponseGet(livro);
    this.showMessageOk();
    this.goToIndex();
  }

  handleRespondeError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.mensagemService.set(error.message);
    } else if (error.status === 500) {
      this.mensagemService.set(LivroMensagens.EditErrorInternalServerErrorPtBr);
    } else if (error.status === 400) {
      this.mensagemService.set(LivroMensagens.EditErrorBadRequestPtBt);
    } else {
      throw -1;
    }
  }

  showMessageOk(): void {
    this.mensagemService.set(LivroMensagens.EditOkPtBr);
  }
}
