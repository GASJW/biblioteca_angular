import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-index',
  templateUrl: './livro-index.component.html',
  styleUrls: ['./livro-index.component.css'],
})
export class LivroIndexComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  pesquisar(): void {
    console.log('pesquisar');
  }

  goToNovo(): void {
    this.router.navigate(['/livros/livro-create']);
  }
}
