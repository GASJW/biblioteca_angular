import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroCreateComponent } from './livro-create/livro-create.component';
import { LivroEditComponent } from './livro-edit/livro-edit.component';
import { LivroIndexComponent } from './livro-index/livro-index.component';

const routes: Routes = [
  { path: '', redirectTo: 'livro-index' },
  {
    path: 'livro-index',
    component: LivroIndexComponent,
  },
  {
    path: 'livro-create',
    component: LivroCreateComponent,
  },
  {
    path: 'livro-edit/:id',
    component: LivroEditComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroRoutingModule {}
