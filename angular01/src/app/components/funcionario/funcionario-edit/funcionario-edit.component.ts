import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { FuncionarioMensagens } from '../funcionario-mensagens';

@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrls: ['./funcionario-edit.component.css'],
})
export class FuncionarioEditComponent implements OnInit {
  private readonly Id: number;
  Funcionario: Funcionario;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private mensagemService: MensagemService
  ) {
    this.Id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.Funcionario = new Funcionario();
  }

  ngOnInit(): void {
    console.log(this.Id);
    this.get(this.Id);
  }

  update(): void {
    this.funcionarioService
      .put(this.Id, this.Funcionario)
      .pipe(take(1))
      .subscribe({
        next: (funcionario) => this.handleResponseUpdate(funcionario),
        error: (error) => this.handleRespondeError(error),
      });
  }

  goToIndex(): void {
    this.router.navigate(['/funcionarios/funcionario-index']);
  }

  get(Id: number): void {
    console.log(`get=>${Id}`);
    this.funcionarioService
      .getId(Id)
      .pipe(take(1))
      .subscribe({
        next: (funcionario) => {
          this.getFuncionario(funcionario);
        },
        error: (error) => this.handleRespondeError(error),
      });
  }

  handleResponseUpdate(funcionario: Funcionario): void {
    this.getFuncionario(funcionario);
    this.showMessageOk();
    this.goToIndex();
  }

  getFuncionario(funcionario: Funcionario): void {
    this.Funcionario = funcionario;
  }

  handleRespondeError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.mensagemService.set(error.message);
    } else if (error.status === 500) {
      this.mensagemService.set(
        FuncionarioMensagens.EditErrorInternalServerErrorPtBr
      );
    } else if (error.status === 400) {
      this.mensagemService.set(FuncionarioMensagens.EditErrorBadRequestPtBt);
    } else {
      throw -1;
    }
  }

  showMessageOk(): void {
    this.mensagemService.set(FuncionarioMensagens.EditOkPtBr);
  }
}
