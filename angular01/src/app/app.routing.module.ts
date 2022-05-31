import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () =>
      import('./components/livro/livro.module').then((lm) => lm.LivroModule),
  },
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./components/funcionario/funcionario.module').then(
        (fu) => fu.FuncionarioModule
      ),
  },
  /*{
    path: "**"
    
  },*/
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
