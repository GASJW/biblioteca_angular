import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { Livro } from 'src/app/models/livro';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  constructor(private httpClient: HttpClient) {}

  post(funcionario: Funcionario): Observable<Funcionario> {
    const uri: string = 'https://localhost:44393/api/funcionarios';
    return this.httpClient.post<Funcionario>(uri, funcionario);
  }
}
