import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css'],
})
export class FuncionarioCreateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  salvar(): void {
    console.log('salvar');
  }

  goToIndex(): void {
    this.router.navigate(['/funcionario-index']);
  }
}
