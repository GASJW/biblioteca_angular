import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioIndexComponent } from './components/funcionario/funcionario-index/funcionario-index.component';
import { LivroCreateComponent } from './components/livro/livro-create/livro-create.component';
import { LivroIndexComponent } from './components/livro/livro-index/livro-index.component';

const routes: Routes = [
  {
    path: 'livro-index',
    component: LivroIndexComponent,
  },
  {
    path: 'livro-create',
    component: LivroCreateComponent,
  },
  {
    path: 'funcionario-index',
    component: FuncionarioIndexComponent,
  },
  {
    path: 'funcionario-create',
    component: FuncionarioCreateComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
