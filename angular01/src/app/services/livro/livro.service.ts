import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Livro } from 'src/app/models/livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  constructor(private httpClient: HttpClient) {}

  post(livro: Livro): Observable<Livro> {
    const uri: string = 'https://localhost:44393/api/livros';
    return this.httpClient.post<Livro>(uri, livro);
  }

  get(): Observable<Livro[]> {
    const uri: string = 'https://localhost:44393/api/livros';
    return this.httpClient.get<Livro[]>(uri);
  }

  /*getId(Id): Observable<Livro> {
    const uri: string = 'https://localhost:44393/api/livros';
    return this.httpClient.get<Livro>(uri, Id);
  }*/
}
