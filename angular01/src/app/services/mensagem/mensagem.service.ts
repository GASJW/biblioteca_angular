import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  private Mensagem: string;
  constructor() {
    this.Mensagem = '';
  }

  get(): string {
    return this.Mensagem;
  }

  set(mensagem: string): void {
    this.Mensagem = mensagem;
  }

  clear(): void {
    this.Mensagem = '';
  }
}
