import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { FuncionarioMensagens } from '../funcionario-mensagens';

@Component({
  selector: 'app-funcionario-index',
  templateUrl: './funcionario-index.component.html',
  styleUrls: ['./funcionario-index.component.css'],
})
export class FuncionarioIndexComponent implements OnInit {
  SearchId: string;
  Funcionarios: Funcionario[];
  constructor(
    private router: Router,
    private funcionarioService: FuncionarioService,
    private mensagemService: MensagemService
  ) {
    this.Funcionarios = new Array<Funcionario>();
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
    this.funcionarioService
      .get()
      .pipe(take(1))
      .subscribe({
        next: (funcionarios) => {
          this.getFuncionarios(funcionarios);
        },
        error: (error) => this.handleRespondeError(error),
      });
  }

  getId(Id: number): void {
    this.funcionarioService
      .getId(Id)
      .pipe(take(1))
      .subscribe({
        next: (funcionario) => {
          this.Funcionarios = [];
          this.Funcionarios.push(funcionario);
        },
        error: (error) => {
          this.handleRespondeError(error);
        },
      });
  }

  confirmDelete(id: number): void {
    if (confirm(`Deseja excluir o registro de funconário ${id}?`)) {
      this.delete(id);
    }
  }

  delete(Id: number): void {
    this.funcionarioService
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
    this.mensagemService.set(FuncionarioMensagens.DeleteOkPtBr);
    this.clearInput();
    this.search();
  }

  clearInput(): void {
    this.SearchId = '';
  }

  handleRespondeErrorGetId(error: HttpErrorResponse): void {
    if (error.status === 404) {
      this.mensagemService.set(FuncionarioMensagens.GetIdErrorNotFoundPtBr);
    }
  }

  handleRespondeError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.mensagemService.set(error.message);
    } else if (error.status === 404) {
      this.mensagemService.set(FuncionarioMensagens.GetIdErrorNotFoundPtBr);
    } else if (error.status === 400) {
      this.mensagemService.set(FuncionarioMensagens.EditErrorBadRequestPtBt);
    } else {
      throw -1;
    }
  }

  getFuncionarios(funcionarios: Array<Funcionario>): void {
    this.Funcionarios = funcionarios;
  }

  goToCreate(): void {
    this.router.navigate(['/funcionarios/funcionario-create']);
  }
}
