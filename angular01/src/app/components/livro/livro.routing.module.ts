import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroCreateComponent } from './livro-create/livro-create.component';
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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroRoutingModule {}
