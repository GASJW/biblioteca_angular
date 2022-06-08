import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  constructor(private httpClient: HttpClient) {}

  post(funcionario: Funcionario): Observable<Funcionario> {
    const uri: string = 'https://localhost:44393/api/funcionarios';
    return this.httpClient.post<Funcionario>(uri, funcionario);
  }

  put(Id: number, livro: Funcionario): Observable<Funcionario> {
    const uri: string = `https://localhost:44393/api/funcionarios/${Id}`;
    return this.httpClient.put<Funcionario>(uri, livro);
  }

  delete(Id: number): Observable<Funcionario> {
    const uri: string = `https://localhost:44393/api/funcionarios/${Id}`;
    return this.httpClient.delete<Funcionario>(uri);
  }

  get(): Observable<Funcionario[]> {
    const uri: string = 'https://localhost:44393/api/funcionarios';
    return this.httpClient.get<Funcionario[]>(uri);
  }

  getId(Id: number): Observable<Funcionario> {
    const uri: string = `https://localhost:44393/api/funcionarios/${Id}`;
    return this.httpClient.get<Funcionario>(uri);
  }
}
