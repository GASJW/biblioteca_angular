import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioIndexComponent } from './funcionario-index/funcionario-index.component';
import { FuncionarioRoutingModule } from './funcionario.routing.module';

@NgModule({
  declarations: [FuncionarioIndexComponent, FuncionarioCreateComponent],
  imports: [FormsModule, FuncionarioRoutingModule],
})
export class FuncionarioModule {}
