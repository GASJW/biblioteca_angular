import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-index',
  templateUrl: './livro-index.component.html',
  styleUrls: ['./livro-index.component.css'],
})
export class LivroIndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pesquisar(): void {
    console.log('pesquisar');
  }

  goToNovo(): void {
    console.log('novo');
  }
}
