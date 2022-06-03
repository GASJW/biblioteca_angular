import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';
import { MenuModule } from './components/menu/menu.module';

import { AppComponent } from './app.component';
import { MensagemAlertComponent } from './components/mensagem/mensagem-alert/mensagem-alert.component';
import { MensagemModule } from './components/mensagem/mensagem.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenuModule,
    HttpClientModule,
    MensagemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
