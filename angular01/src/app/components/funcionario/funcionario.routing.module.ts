import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioIndexComponent } from './funcionario-index/funcionario-index.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionarioRoutingModule {}
