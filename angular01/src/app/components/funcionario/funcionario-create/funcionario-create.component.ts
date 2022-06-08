import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { FuncionarioMensagens } from '../funcionario-mensagens';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css'],
})
export class FuncionarioCreateComponent implements OnInit {
  Funcionario: Funcionario;
  constructor(
    private router: Router,
    private funcionarioService: FuncionarioService,
    private mensagemService: MensagemService
  ) {
    this.Funcionario = new Funcionario();
  }

  ngOnInit(): void {}

  save(): void {
    this.funcionarioService
      .post(this.Funcionario)
      .pipe(take(1))
      .subscribe({
        next: (funcionario) => this.handleResponseOK(funcionario),
        error: (error) => this.handleResponseError(error),
      });
  }

  handleResponseOK(funcionario: Funcionario): void {
    this.getFuncionario(funcionario);
    this.showMessageOK();
    this.goToIndex();
  }

  handleResponseError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.mensagemService.set(error.message);
    } else if (error.status === 500) {
      this.mensagemService.set(
        FuncionarioMensagens.CreateErrorInternalServerErrorPtBr
      );
    } else if (error.status === 400) {
      this.mensagemService.set(FuncionarioMensagens.CreateErrorBadRequestPtBr);
    }
  }

  getFuncionario(funcionario: Funcionario): void {
    this.Funcionario = funcionario;
  }

  showMessageOK(): void {
    this.mensagemService.set(FuncionarioMensagens.CreateOKPtBr);
  }

  goToIndex(): void {
    this.router.navigate(['/funcionarios/funcionario-index']);
  }
}
