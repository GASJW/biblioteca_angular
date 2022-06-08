import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LivroIndexComponent } from './livro-index/livro-index.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroRoutingModule } from './livro.routing.module';
import { LivroEditComponent } from './livro-edit/livro-edit.component';
import { LivroCreateReactiveComponent } from './livro-create-reactive/livro-create-reactive.component';

@NgModule({
  declarations: [
    LivroIndexComponent,
    LivroCreateComponent,
    LivroEditComponent,
    LivroCreateReactiveComponent,
  ],
  imports: [FormsModule, LivroRoutingModule, CommonModule, ReactiveFormsModule],
})
export class LivroModule {}
