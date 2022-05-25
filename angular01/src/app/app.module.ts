import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LivroIndexComponent } from './components/livro/livro-index/livro-index.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { AppRoutingModule } from './app.routing.module';
import { FuncionarioIndexComponent } from './components/funcionario/funcionario-index/funcionario-index.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LivroIndexComponent,
    LivroCreateComponent,
    FuncionarioIndexComponent,
    FuncionarioCreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
