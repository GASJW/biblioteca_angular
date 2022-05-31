import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioIndexComponent } from './funcionario-index/funcionario-index.component';
import { FuncionarioRoutingModule } from './funcionario.routing.module';
import { FuncionarioEditComponent } from './funcionario-edit/funcionario-edit.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FuncionarioIndexComponent,
    FuncionarioCreateComponent,
    FuncionarioEditComponent,
  ],
  imports: [FormsModule, FuncionarioRoutingModule, CommonModule],
})
export class FuncionarioModule {}
