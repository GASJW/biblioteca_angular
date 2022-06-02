import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  put(Id: number, livro: Livro): Observable<Livro> {
    const uri: string = `https://localhost:44393/api/livros/${Id}`;
    return this.httpClient.put<Livro>(uri, livro);
  }

  delete(Id: number): Observable<Livro> {
    const uri: string = `https://localhost:44393/api/livros/${Id}`;
    return this.httpClient.delete<Livro>(uri);
  }

  get(): Observable<Livro[]> {
    const uri: string = 'https://localhost:44393/api/livros';
    return this.httpClient.get<Livro[]>(uri);
  }

  getId(Id: number): Observable<Livro> {
    const uri: string = `https://localhost:44393/api/livros/${Id}`;
    return this.httpClient.get<Livro>(uri);
  }
}
