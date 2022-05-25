import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css'],
})
export class FuncionarioCreateComponent implements OnInit {
  Funcionario: Funcionario;
  constructor(private router: Router) {
    this.Funcionario = new Funcionario();
  }

  ngOnInit(): void {}

  salvar(): void {
    console.log('salvar');
    console.log(JSON.stringify(this.Funcionario));
  }

  goToIndex(): void {
    this.router.navigate(['/funcionario-index']);
  }
}
