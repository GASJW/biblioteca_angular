import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css'],
})
export class LivroCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  salvar(): void {
    console.log('salvar');
  }

  goToIndex(): void {
    console.log('voltar');
  }
}
