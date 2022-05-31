import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LivroIndexComponent } from './livro-index/livro-index.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroRoutingModule } from './livro.routing.module';
import { LivroEditComponent } from './livro-edit/livro-edit.component';

@NgModule({
  declarations: [LivroIndexComponent, LivroCreateComponent, LivroEditComponent],
  imports: [FormsModule, LivroRoutingModule, CommonModule],
})
export class LivroModule {}
