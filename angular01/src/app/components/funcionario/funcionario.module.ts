import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioIndexComponent } from './funcionario-index/funcionario-index.component';

@NgModule({
  declarations: [FuncionarioIndexComponent, FuncionarioCreateComponent],
  imports: [FormsModule],
})
export class FuncionarioModule {}
