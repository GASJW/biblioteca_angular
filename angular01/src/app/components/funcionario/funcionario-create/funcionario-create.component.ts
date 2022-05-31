import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css'],
})
export class FuncionarioCreateComponent implements OnInit {
  Funcionario: Funcionario;
  constructor(
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {
    this.Funcionario = new Funcionario();
  }

  ngOnInit(): void {}

  salvar(): void {
    //console.log('salvar-iniciou');

    this.funcionarioService
      .post(this.Funcionario)
      .pipe(take(1))
      .subscribe((funcionario) => {
        this.Funcionario = funcionario;
        alert('Funcionário inserido com sucesso.');
        //console.log(JSON.stringify(this.Funcionario));
      });
  }

  goToIndex(): void {
    this.router.navigate(['/funcionarios/funcionario-index']);
  }
}
