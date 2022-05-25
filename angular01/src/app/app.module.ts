import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LivroIndexComponent } from './components/livro/livro-index/livro-index.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LivroIndexComponent,
    LivroCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
