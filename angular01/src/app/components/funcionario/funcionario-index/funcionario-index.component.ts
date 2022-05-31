import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-index',
  templateUrl: './funcionario-index.component.html',
  styleUrls: ['./funcionario-index.component.css'],
})
export class FuncionarioIndexComponent implements OnInit {
  Funcionarios: Funcionario[];
  constructor(
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {
    this.Funcionarios = new Array<Funcionario>();
  }

  ngOnInit(): void {}

  pesquisar(): void {
    this.funcionarioService
      .get()
      .pipe(take(1))
      .subscribe((funcionarios) => {
        this.Funcionarios = funcionarios;
        console.log(JSON.stringify(this.Funcionarios));
      });
  }

  goToNovo(): void {
    this.router.navigate(['/funcionarios/funcionario-create']);
  }
}
