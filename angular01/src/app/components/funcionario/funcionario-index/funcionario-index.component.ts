import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-index',
  templateUrl: './funcionario-index.component.html',
  styleUrls: ['./funcionario-index.component.css'],
})
export class FuncionarioIndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  pesquisar(): void {
    console.log('pesquisar');
  }

  goToNovo(): void {
    this.router.navigate(['/funcionario-create']);
  }
}
