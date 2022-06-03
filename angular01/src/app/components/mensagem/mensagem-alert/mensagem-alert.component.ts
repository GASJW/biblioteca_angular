import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';

@Component({
  selector: 'app-mensagem-alert',
  templateUrl: './mensagem-alert.component.html',
  styleUrls: ['./mensagem-alert.component.css'],
})
export class MensagemAlertComponent implements OnInit {
  constructor(public mensagemService: MensagemService) {}

  ngOnInit(): void {}

  ok(): void {
    this.mensagemService.clear();
  }
}
