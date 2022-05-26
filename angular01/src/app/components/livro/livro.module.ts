import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LivroIndexComponent } from './livro-index/livro-index.component';
import { LivroCreateComponent } from './livro-create/livro-create.component';

@NgModule({
  declarations: [LivroIndexComponent, LivroCreateComponent],
  imports: [FormsModule],
})
export class LivroModule {}
