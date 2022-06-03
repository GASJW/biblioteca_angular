import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MensagemAlertComponent } from './mensagem-alert/mensagem-alert.component';

@NgModule({
  declarations: [MensagemAlertComponent],
  imports: [CommonModule],
  exports: [MensagemAlertComponent],
})
export class MensagemModule {}
