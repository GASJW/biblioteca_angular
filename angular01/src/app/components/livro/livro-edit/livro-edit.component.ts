import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.css'],
})
export class LivroEditComponent implements OnInit {
  private readonly Id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.Id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.Id);
  }

  ngOnInit(): void {}
}
